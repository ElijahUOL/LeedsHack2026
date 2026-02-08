<?php
$email = filter_input(INPUT_POST,"email", FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST,"password", FILTER_SANITIZE_STRING);

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "logindb";

$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    echo "Database is not webhosted in prototype, if a localhost is setup this does work";
    die("Connect Error (". $conn->connect_errno .") ".$conn->connect_error);
} 
else 
{
    $stmt = ("SELECT Count(email) FROM logindetails WHERE email='".$email."' AND password='".$password."';");
    if ($result = $conn -> query($stmt)) {
        while($row = $result->fetch_assoc()) {
            $resultOut = $row["Count(email)"];
        }
        if ($resultOut == '1') {
            echo 'Succesful login';
        }
        elseif($resultOut == '0'){
            echo 'Incorrect email or password';
        }
    } else {
        echo "Error; ";
    }
    $conn->close();
}
?>

<html>
<body>
<a href="main.html">Click Here to return to Main page</a>
</body>
</html>

