<?php
	function check($field) {
		$field = filter_var($field, FILTER_SANITIZE_EMAIL);
		if (filter_var($field, FILTER_VALIDATE_EMAIL))
			return true;
		else 
			return false;
	}

	if (isset($_REQUEST['email'])) {

		if (check($_REQUEST['email']) == false)
			echo "Invalid Inputs";
		else {
			$name = $_REQUEST['name'];
			$message = $_REQUEST['text'];
			$email = $_REQUEST['email'];
			$to = "ybinley@gmail.com";
			$subject = "FROM: " . $name;

			mail($to, $subject, $message);
		}
	}
?>