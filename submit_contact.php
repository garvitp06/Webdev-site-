php
if ($_SERVER[REQUEST_METHOD] == POST) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

     You can send this data via email or store it in a database
    $to = info@sweettreatsbakery.com;
    $subject = New Contact Request from $name;
    $body = Name $namenEmail $emailnPhone $phonenMessagen$message;
    $headers = From $email;

    if (mail($to, $subject, $body, $headers)) {
        echo Thank you for contacting us! We will get back to you soon.;
    } else {
        echo There was an error sending your message. Please try again.;
    }
}

