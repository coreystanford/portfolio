<?php

    require_once "Mail.php";

    $response = array( 'success' => false, 'message' => "Your message failed to send. Please try again later." );
    $formData = file_get_contents( 'php://input' );
    $data = json_decode( $formData );

    if ( $data->email ) {
        $name = $data->name;
        $email = $data->email;
        $message = $data->message;

        if ( $name != '' && $email != '' && $message != '' ) {

            $from = "Sender <". $email .">";
            $to = "Recipient <corey@coreystanford.com>";

            $subject = "Test email sent via php"; 
            $body = "Message:\n" . $message . "\n\n"; 
            $host = "mail.coreystanford.com"; 
            $username = "corey@coreystanford.com"; 
            $password = "password"; 

            $headers = array ('From' => $from, 
              'To' => $to, 
              'Subject' => $subject); 
            $smtp = Mail::factory('smtp', 
              array ('host' => $host, 
              'auth' => true, 
              'username' => $username, 
              'password' => $password)); 

            $mail = $smtp->send($to, $headers, $body); 

            //var_dump($smtp);

            if ( $mail ) {
                $response[ 'success' ] = true;
                $response['message'] = "Your message was successfully sent!";
            }

        }
    }

    echo json_encode( $response );