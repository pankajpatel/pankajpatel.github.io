<?php
if( isset($_GET['conatct'])){
	$data = json_decode(file_get_contents('php://input'), true);
	if( isset($data['from']) and isset($data['name']) and isset($data['message']) and isset($data['email'])){

	    $to = "thank.you@pankaj.pro"; // this is your Email address
	    $from = $data['from']; // this is the sender's Email address
	    $name = $data['name'];
	    $subject = "Conatct Page";
	    $subject2 = "Copy of your form submission";
	    $message = $name . " wrote the following:" . "\n\n" . $data['message'];
	    $message2 = "Here is a copy of your message " . $name . "\n\n" . $data['message'];

	    $headers = "From:" . $from;
	    $headers2 = "From:" . $to;
	    $x = mail($to,$subject,$message,$headers);
	    // $y = mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
	    if( $x ) {
	    	echo '{
			  "extra": {
			    "message": "Thank you ' . $name . ' for contacting. I will try to reply shortly.";
			  }, 
			  "status": "success"
			}';
		} else {
			echo '{
			  "error": "not-allowed", 
			  "extra": {
			    "message": "Operation not allowed'.$x.'|'.$y.'|'.(error_get_last()).'",
			    "data": "'.json_encode($data).'"
			  }, 
			  "status": "error"
			}';
		}
	    // You can also use header('Location: thank_you.php'); to redirect to another page.
	}

}
