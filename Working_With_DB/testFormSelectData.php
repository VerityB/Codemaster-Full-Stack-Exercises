<!DOCTYPE html>
<html>
<body>

<?php
$servername = "localhost";
$username = "root"; // username must be root 
$password = "";
$dbname = "testform"; // Change this to the database name 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT firstName, lastName FROM test_form_database"; // change params after SELECT and test_form_database to the table you're pulling from 
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br>Name: " . $row["firstName"]. " " . $row["lastName"] . "<br>"; // change params here
    }
} else {
    echo "0 results";
}

$conn->close();
?> 

</body>
</html>