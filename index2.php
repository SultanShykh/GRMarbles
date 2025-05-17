<?php
// Get location data
$location = json_decode(file_get_contents('get_location.php'), true);

echo "location is: $location";

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Analytics Dashboard</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<div class="wrapper">
		<nav class="sidebar">
			<div class="sidebar-header">
				<h3><strong>Analytics</strong> Dashboard</h3>
			</div>
			<ul class="list-unstyled components">
				<li>
					<a href="index.php"><i class="fas fa-home"></i> Home</a>
				</li>
				<li>
					<a href="index2.php"><i class="fas fa-chart-bar"></i> Analytics</a>
				</li>
				<li>
					<a href="settings.php"><i class="fas fa-cog"></i> Settings</a>
				</li>
			</ul>
		</nav>
		<main class="content">
			<div class="container-fluid p-0">

				<h1 class="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>

				<!-- Add Location Information Card -->
				<div class="row mb-3">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Visitor Location</h5>
								<?php if ($location): ?>
									<p class="mb-0">
										<strong>City:</strong> <?php echo htmlspecialchars($location['city'] ?? 'Unknown'); ?><br>
										<strong>Region:</strong> <?php echo htmlspecialchars($location['region'] ?? 'Unknown'); ?><br>
										<strong>Country:</strong> <?php echo htmlspecialchars($location['country'] ?? 'Unknown'); ?><br>
										<strong>IP Address:</strong> <?php echo htmlspecialchars($location['ip'] ?? 'Unknown'); ?>
									</p>
								<?php else: ?>
									<p class="mb-0">Location information not available</p>
								<?php endif; ?>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<!-- Add other content here -->
				</div>
			</div>
		</main>
	</div>
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script src="script.js"></script>
</body>
</html> 