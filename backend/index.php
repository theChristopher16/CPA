<?php

//To start the PHP server run this in the terminal from outside the CPA directory
//php -S 127.0.0.1:8080 -t ./CPA/backend

//allows access from angular
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//create test database with sql script using this:sudo mysql < createTestDB.sql
//make sure you have a user "database" with privileges to access the DB
//credentials for connecting to test database
//may need to sanitize
$localhost = "127.0.0.1";
$username = "database";
$password = "dbpass";
$dbname = "testDB";

// get the HTTP method, path, and body of the request
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/')); //this may through a notice
//$input = json_decode(file_get_contents('php://input'),true); //might need for future testing

// create connection to mysql
$conn = new mysqli($localhost, $username, $password, $dbname);
mysqli_set_charset($conn ,'utf8');

//in case of connection errors
if($conn->connect_error) {
    die("Error : " . $conn->connect_error);
}

//Cases for types of HTTP actions
switch ($method) {
  case 'GET':
    $id = $_GET['id'];
    $sql = "SELECT * FROM scoreTest";
  case 'PUT':
    //$id = $input["id"];
    //$sql = //put sql logic goes here
    break;
  case 'POST':
    //$sql = //POST sql logic goes here
    break;
  case 'DELETE':
    //$id = $_GET['id'];
    //$sql = //DELETE slq logic goes here
    break;
}

// run SQL statement
$result = mysqli_query($conn,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($conn));
}

// print results, insert id or affected row count
if ($method == 'GET') {

  $outp = $result->fetch_all(MYSQLI_ASSOC);
  echo json_encode($outp);

} 

elseif ($method == 'POST') {
  echo mysqli_insert_id($conn);
} 

else {
  echo mysqli_affected_rows($conn);
}

//Close mysqli database connection
$conn->close();

?>