<?php
include_once "lib/php/functions.php";
$_SESSION['cart'] = [];
?><!DOCTYPE html>
<html lang="en">
<head>
	<title>Store: Purchase Confirmation</title>

	<?php include "parts/meta.php" ?>

<script src="js/products.js"></script>
	<script src="lib/js/functions.js"></script>
	<script src="js/templates.js"></script>
	<script src="js/list.js"></script>
<link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins|Roboto&display=swap" rel="stylesheet">

</head>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="js/products.js"></script>
<body>
	<main>
  <div class="logo">
     <a href="index.php" style="height: 80px;">
        <img src="images/logo.png" style="height: 70px">
      </a>
  </div>
  <!-- <nav class="museum">Asian Art Museum</nav> -->
  <ul class="museum" role="navigation">
  	<li><a href="index.php">Home</a></li>
    <li><a href="product_list.php">Store</a></li>
    <li><a href="about.php">About</a></li>
    <li class="active"><a href="product_cart.php">Cart</a></li>
    <li><a href="admin/index.php">Admin</a></li>
  </ul>
	</main>
	<!-- <script src="js/index.js"></script> -->


	<div class="container">
		<div class="card soft">

			<h2>Purchase Confirmation</h2>

			<div>Thank you for buying</div>

			<div>
				<a href="product_list.php" class="form-button">Back to shopping</a>
			</div>
		
		</div>
	</div>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
<?php include "parts/footer.php" ?>	
</body>
</html>