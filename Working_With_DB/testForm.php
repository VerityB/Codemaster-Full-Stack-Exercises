<html>

<?php
$firstName = $lastName = "";
if(isset($_POST['firstName'])) {
$firstName = test_input($_POST["firstName"]);
} else {
    $firstName = "";
}
if(isset($_POST['lastName'])) {
    $lastName = test_input($_POST["lastName"]);
    } else {
        $lastName = "";
    }



function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
// database connection
  $mysqli = new mysqli('localhost', 'root', '', 'testForm'); // localhost, username, password, database name

  
  $sql = "INSERT INTO test_form_database (firstName, lastName) VALUES (?, ?)";

//   $stmt = $mysqli->prepare($sql);

//   var_dump ($mysqli);

  if ($stmt = $mysqli->prepare($sql)){
    echo $mysqli->error;
  }
  $stmt->bind_param('ss', $firstName, $lastName); // s i b 
  
//   var_dump ($stmt);




  
if($stmt->execute()) {
  $heading = "success";
} else {
    $heading = "failure";
}
  $stmt->close();

  $mysqli->close(); // close frees up resources, would not execute after close

  
  // SELECT, UPDATE, DELETE, INSERT

?>

<form method="POST">
First Name: <input type="text" name="firstName" value="<?php echo $firstName;?>">
  <br><br>
Last Name: <input type="text" name="lastName" value="<?php echo $lastName;?>">
<br><br>
<button type="Submit">Submit</button>
</form>
<?php echo $heading;
?>
</html>
