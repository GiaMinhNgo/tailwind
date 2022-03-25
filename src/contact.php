<?php

$con = mysqli_connect('localhost', 'root', '','db_contact');

// get the post records
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`id`, `fldName`, `fldEmail`, `fldPhone`, `fldMessage`) VALUES ('0', '$name', '$email', '$number', '$message')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	// echo "Contact Records Inserted";
	echo file_get_contents("/demo/src/contact.html");
}

?>