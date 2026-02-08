<?php
$email = filter_input(INPUT_POST,"email", FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST,"password", FILTER_SANITIZE_STRING);

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "logindb";

$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    die("Connect Error (". $conn->connect_errno .") ".$conn->connect_error);
} 
else 
{
    $query = ("SELECT Count(email) FROM logindetails WHERE email='".$email."';");
    if ($result = $conn -> query($query)) {
        while($row = $result->fetch_assoc()) {
            $resultOut = $row["Count(email)"];
        }
        if ($resultOut == '1') {
            echo 'Email already in use';
        }
        else{
            $stmt = $conn->prepare("INSERT INTO logindetails (email, password) VALUES (?, ?)");

            if ($stmt === false) {
                die("Prepare failed: " . $conn->error);
            }

            $stmt->bind_param("ss", $email, $password);

            if ($stmt->execute()) {
                echo "You have succesfully registered";
            } else {
                echo "Error; " . $stmt->error;
            }
    
        $stmt->close();
        }
    }
    $conn->close();
}
?>

<html>
<body>
    <a href="login.html">Click here to return to login page</a>
</body>
</html>
