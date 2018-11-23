<?php
session_start();
include 'class/dtb.class.php';
include 'class/user.class.php';

$logout = new User();
$logout->logoutSession();


?>