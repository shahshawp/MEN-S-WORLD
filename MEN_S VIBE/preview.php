<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8" />
 <title>MEN'S VIBE</title>

</head>
<body>
<nav>
	<script src="preview.js"></script>
</nav>
<?php
	$fname = $_POST['first_name'];
	$lname = $_POST['last_name'];
    $email = $_POST['email'];
	$phoneno = $_POST['phone_number'];
	$address = $_POST['street_address'];
	$city = $_POST['city'];
	$state = $_POST['state'];
	$postcode = $_POST['post_code'];
    $subject = $_POST['subject'];
    $product = $_POST['product'];
    $comment = $_POST['comment'];

?>
<form id="previewPage" method="post" action="enquiry_process.php">
	<input type="hidden" name="first_name" value="<?php echo $fname; ?>"/>
	<input type="hidden" name="last_name" value="<?php echo $lname; ?>"/>
    <input type="hidden" name="email" value="<?php echo $email; ?>"/>
	<input type="hidden" name="phone_number" value="<?php echo $phoneno; ?>"/>
	<input type="hidden" name="street_address" value="<?php echo $address; ?>"/>
	<input type="hidden" name="city" value="<?php echo $city; ?>"/>
	<input type="hidden" name="state" value="<?php echo $state; ?>"/>
	<input type="hidden" name="post_code" value="<?php echo $postcode; ?>"/>
    <input type="hidden" name="subject" value="<?php echo $subject; ?>"/>
	<input type="hidden" name="product" value="<?php echo $product; ?>"/>
	<input type="hidden" name="comment" value="<?php echo $comments; ?>"/>
	
<fieldset>
 <legend>User Details</legend>
 <p>Your First Name: <span id="confirm_fname"></span></p>
 <p>Your Last Name: <span id="confirm_lname"></span></p>
 <p>Your email : <span id="confirm_email"></span></p>
 <p>Your Phone Number : <span id="confirm_pnumber"></span></p>
 <p>Your street : <span id="confirm_street"></span></p>
 <p>Your city(s) : <span id="confirm_city"></span></p>
 <p>Your state : <span id="confirm_state"></span></p>
 <p>Your postcode: <span id="confirm_postcode"></span></p>
 <p>Your subject : <span id="confirm_subject"></span></p>
 <p>Your product : <span id="confirm_product"></span></p>
 <p>Your comment : <span id="confirm_comment"></span></p>



 <!--Create the rest of the data output here -->
 <input type="submit" value="Confirm Enquiry" />
 </fieldset>
</form>
<footer>
	<script src="footer.js"></script>
</footer>

</body>
</html>
