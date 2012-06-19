<?php 
$email = trim($_POST['email']);  
//$file = fopen("../emails.txt","a+");
//fwrite($file, "Name: ".$_POST['name']." Email: ".$email." Phone: ".$_POST['phone']."\r\n");
//fclose($file); 

$to = "brian@osher.co.za";
 $subject = "New Osher Hit!";
 $body = print_r($_POST, true);
 $headers = "From: brian@osher.co.za\r\n" ."X-Mailer: php";
 if (mail($to, $subject, $body, $headers)) {
   echo("Added successfully!");
  } else {
   echo("Adding failed...");
  }
  
  $to = $email;
 $subject = "Osher Propery Solutions Signup";
 $body = "Hi ".$_POST['name']."\n\nThank you for registering on our website. We will be in touch with you, alternatively you can contact one of our brokers directly as per the contact page.\n\nOsher Property Solutions";
 $headers = "From: brian@osher.co.za\r\n" ."X-Mailer: php";
  mail($to, $subject, $body, $headers);
?>


