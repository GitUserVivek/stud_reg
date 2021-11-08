<?php
// $username="id13918522_mrvivek_db";
// $password="Mr.Vivek@7840"; 
// $host="localhost";

// $db_name="id13918522_mrunkn"; 

// $connect=mysqli_connect($host,$username,$password,$db_name); 
// if($connect){  

//     $query = "CREATE TABLE IF NOT EXISTS  `STUD_REG`(`SR` INT NOT NULL  PRIMARY KEY AUTO_INCREMENT ,`NAME` TEXT(15) NOT NULL,`DOB` Text(12)  , `GENDER` VARCHAR(20) NOT NULL),`EMAIL` VARCHAR(20) NOT NULL ,`ADDRESS` VARCHAR(50) NOT NULL ,`DEPARTMENT` VARCHAR(20) NOT NULL ,`COURSE` VARCHAR(20) NOT NULL ,`MOBILE` BIGINT NOT NULL ";
//     if(mysqli_query($connect, $query)){
//        echo "done Table";
//     }else{ 
//        echo mysqli_connect_error();
//     }
//    $action = "AddData"; 
//    if($action == "AddData"){ 
//       $name = $_POST['name'];
//       $dob = $_POST['dob'];
//       $gender = $_POST['gender'];
//       $email = $_POST['email'];
//       $address = $_POST['address'];
//       $department = $_POST['department'];
//       $course = $_POST['course'];
//       $mobile = $_POST['mobile'];
 
//       $queryInsert = "INSERT INTO `id13918522_mrunkn`.`STUD_REG` (`SR`, `NAME`, `DOB`, `GENDER`, `EMAIL`, `ADDRESS`, `DEPARTMENT`, `COURSE`, `MOBILE`) VALUES (NULL,'$name','$dob','$gender','$email','$address','$department','$course','$mobile')"; 
//       $results = mysqli_query($connect, $queryInsert); 

//       if($results){
//          echo "done data";
//       }else{
//          echo "no data";
//          echo mysqli_connect_error();
//       }
//    }else{
//       echo mysqli_connect_error();
//    }

//  }else{
//     echo "Cant  Connect To DB..";
// }
?> 
