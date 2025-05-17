<?php
require_once 'db_config.php';

function getUserLocation() {
    // Get user's IP address
    $ip = $_SERVER['REMOTE_ADDR'];
    
    // If using a proxy
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    
    $token = "c8d470ed4ef248";

    echo "ip is: $ip";
    // Use ipinfo.io API to get location data
    $url = "https://ipinfo.io/{$ip}?token={$token}";
    
    echo "url is: $url";
    // Initialize cURL session
    $ch = curl_init();
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    // Execute cURL session
    $response = curl_exec($ch);
    
    // Close cURL session
    curl_close($ch);
    
    // Decode JSON response
    $data = json_decode($response, true);
    
    // Insert data into database
    if ($data) {
        try {
            $sql = "INSERT INTO UserData (ip_address, city, region, country, postal_code, timezone, org) 
                    VALUES (:ip, :city, :region, :country, :postal, :timezone, :org)";
            
            $stmt = $GLOBALS['pdo']->prepare($sql);
            
            $stmt->execute([
                ':ip' => $data['ip'] ?? null,
                ':city' => $data['city'] ?? null,
                ':region' => $data['region'] ?? null,
                ':country' => $data['country'] ?? null,
                ':postal' => $data['postal'] ?? null,
                ':timezone' => $data['timezone'] ?? null,
                ':org' => $data['org'] ?? null
            ]);
        } catch(PDOException $e) {
            // Log error but don't stop execution
            error_log("Database Error: " . $e->getMessage());
        }
    }
    
    return $data;
}

// Get location data
$location = getUserLocation();

// Return location data as JSON
// header('Content-Type: application/json');
// echo json_encode($location);
?> 