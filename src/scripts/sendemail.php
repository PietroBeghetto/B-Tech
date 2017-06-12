<?php
    $email = $_POST["email"];
    $firstname = $_POST["firstname"];
    $surname = $_POST["surname"];
    $date = $_POST["date"];

    if (!preg_match("/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/", $email))
    {
        echo "INVALID_EMAIL";
    }elseif($firstname == "" || $surname == ""){
        echo "INVALID_NAME";
    }else{
        mail($email, "Tickets for the Festival of Education", "Hello,".$firstname." ".$surname."\nJust to confirm for you to purchase tickets for the Festival of Education on ".$date."\nYours,\nThe B-TECH Team", "From: btech.confirm@gmail.com");
        echo "VALID";
    }

?>