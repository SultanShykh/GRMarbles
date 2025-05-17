<?php
$host = 'localhost';
$dbname = 'GRMarbles';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create database if not exists
    $sql = "CREATE DATABASE IF NOT EXISTS $dbname";
    $pdo->exec($sql);
    
    // Select the database
    $pdo->exec("USE $dbname");
    
    // Create table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS UserData (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ip_address VARCHAR(45),
        city VARCHAR(100),
        region VARCHAR(100),
        country VARCHAR(100),
        postal_code VARCHAR(20),
        timezone VARCHAR(100),
        org VARCHAR(255),
        visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    
} catch(PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}
?> 