<?php

//To start the PHP server run this in the terminal from outside the CPA directory
//php -S 127.0.0.1:8080 -t ./CPA/backend

//import Request and Router Classes
include_once 'Request.php';
include_once 'Router.php';

//allows access from angular
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$router = new Router(new Request);

//create test database with sql script using this:sudo mysql < createTestDB.sql
//make sure you have a user "database" with privileges to access the DB
//credentials for connecting to test database
//may need to sanitize
$localhost = "127.0.0.1";
$username = "database";
$password = "dbpass";
$dbname = "testDB";

//Base route
$router->get('/', function() {
  return <<<HTML
  <h1>PHP SERVER</h1>
HTML;
});

//Gets the scores from Database
$router->get('/scores', function($request){

  global $localhost, $username, $password, $dbname; //gets db creds for this scope

  // create connection to mysql
  $conn = new mysqli($localhost, $username, $password, $dbname);
  mysqli_set_charset($conn ,'utf8');

  //in case of connection errors
  if($conn->connect_error) {
      die("Error : " . $conn->connect_error);
  }

  $sql = "SELECT Id,Name,Score FROM usersTest"; //SQL Querry

  $result = mysqli_query($conn,$sql);

  //if there is no result from db -> 404 error
  if (!$result) {
    http_response_code(404);
    die(mysqli_error($conn));
  }

  $outp = $result->fetch_all(MYSQLI_ASSOC); //fetch results from DB

  $conn->close(); //close connection to DB

  return json_encode($outp);
});

//Gets the Users' info from Database
$router->get('/userInfo', function($request){

  global $localhost, $username, $password, $dbname; //gets db creds for this scope

  // create connection to mysql
  $conn = new mysqli($localhost, $username, $password, $dbname);
  mysqli_set_charset($conn ,'utf8');

  //in case of connection errors
  if($conn->connect_error) {
      die("Error : " . $conn->connect_error);
  }

  $sql = "SELECT * FROM usersTest"; //SQL Querry

  $result = mysqli_query($conn,$sql);

  //if there is no result from db -> 404 error
  if (!$result) {
    http_response_code(404);
    die(mysqli_error($conn));
  }

  $outp = $result->fetch_all(MYSQLI_ASSOC); //fetch results from DB

  $conn->close(); //close connection to DB

  return json_encode($outp);
});

//Gets the achievements from Database
$router->get('/achievements', function($request){

  global $localhost, $username, $password, $dbname; //gets db creds for this scope

  // create connection to mysql
  $conn = new mysqli($localhost, $username, $password, $dbname);
  mysqli_set_charset($conn ,'utf8');

  //in case of connection errors
  if($conn->connect_error) {
      die("Error : " . $conn->connect_error);
  }

  $sql = "select * from Achievements"; //SQL Querry

  $result = mysqli_query($conn,$sql);

  //if there is no result from db -> 404 error
  if (!$result) {
    http_response_code(404);
    die(mysqli_error($conn));
  }

  $outp = $result->fetch_all(MYSQLI_ASSOC); //fetch results from DB

  $conn->close(); //close connection to DB

  return json_encode($outp);
});

//POST method to add a new user to database
$router->post('/addUser',function($request){

  global $localhost, $username, $password, $dbname; //gets db creds for this scope

  // create connection to mysql
  $conn = new mysqli($localhost, $username, $password, $dbname);
  mysqli_set_charset($conn ,'utf8');

  //in case of connection errors
  if($conn->connect_error) {
      die("Error : " . $conn->connect_error);
  }

  $jsonData = json_encode($request->getBody());
  $usertData = json_decode($jsonData,true); //creates Map to use for SQL
  
  $userName = $usertData['Name'];
  $score = 0;
  
  $sql = "INSERT INTO usersTest ( Id, Name, Score, Online, Achievements, LastLocation)
    VALUES ( null, '$userName', $score, TRUE, '1','Wyly')";

  $result = mysqli_query($conn,$sql);

  //if there is an issue with POSTing
  if (!$result) {
    http_response_code(500);
    die(mysqli_error($conn));
  }

  return json_encode($request->getBody());
});

//POST method to update users' score to database
$router->post('/updateScore',function($request){

  global $localhost, $username, $password, $dbname; //gets db creds for this scope

  // create connection to mysql
  $conn = new mysqli($localhost, $username, $password, $dbname);
  mysqli_set_charset($conn ,'utf8');

  //in case of connection errors
  if($conn->connect_error) {
      die("Error : " . $conn->connect_error);
  }

  $jsonData = json_encode($request->getBody());
  $usertData = json_decode($jsonData,true); //creates Map to use for SQL
  
  $userName = $usertData['Name'];
  $score = $usertData['Score'];
  $APIKey = $usertData['Key'];

  //Verifies that the API key is correct
  if($APIKey != "SSBsb3ZlIHRpZGRpZXM"){
    http_response_code(403);
    die(mysqli_error($conn));
  }
  
  $sql = "UPDATE usersTest SET Score = Score + $score WHERE Name = '$userName'";

  $result = mysqli_query($conn,$sql);
  
  //if there is an issue with POSTing
  if (!$result) {
    http_response_code(500);
    die(mysqli_error($conn));
  }

  return json_encode($request->getBody());
});

//Gets the raspberry PI network info from Database
$router->get('/networkStatus', function($request){

  global $localhost, $username, $password, $dbname; //gets db creds for this scope

  // create connection to mysql
  $conn = new mysqli($localhost, $username, $password, $dbname);
  mysqli_set_charset($conn ,'utf8');

  //in case of connection errors
  if($conn->connect_error) {
      die("Error : " . $conn->connect_error);
  }

  $sql = "SELECT * from testRaspPi"; //SQL Querry

  $result = mysqli_query($conn,$sql);

  //if there is no result from db -> 404 error
  if (!$result) {
    http_response_code(404);
    die(mysqli_error($conn));
  }

  $outp = $result->fetch_all(MYSQLI_ASSOC); //fetch results from DB

  $conn->close(); //close connection to DB

  return json_encode($outp);
});

?>