//function for getting the current date and time
function time_now(){

 	const date = new Date();
 	var days =["Sunday", "Monday", "Tuesday", "Wednesday", 
 				"Thursday", "Friday", "Saturday"];

 	var months = ["January", "February", "March", "April", 
 				"May", "June", "July", "August", "September", 
 				"October", "November", "December"];

 	let year = date.getFullYear();
 	let month = months[date.getMonth()];
 	let dayOfmonth = date.getDate();
 	let day = days[date.getDay()];
 	let minutes = date.getMinutes();
 	let hours = date.getHours();

	let ampm = hours >= 12 ? 'pm' : 'am';
 	hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;

 	let currentDate = "Today is " + month + " " + dayOfmonth + ", " + year + ", " + day + ".";
 	let currentTime = "</br>The current time is " + hours + " : " + minutes + " " + ampm + ".";

 	return currentDate + currentTime;
}

//empty array for storing objects
let studentArray = [];

//object for student infos
function student(studentID, name, age, email, course){
 	this.studentID = studentID;
 	this.name = name;
 	this.age = age;
 	this.email = email;
 	this.course = course;
}

//function to add students into array
function add_student(){
	var studentID = Math.floor(Math.random() * 900000)+100000;
 	var name = document.getElementById("name").value;
 	var age = document.getElementById("age").value;
 	var email = document.getElementById("email").value;
 	var course = document.querySelector('input[name="course"]:checked').value;

 	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

 	if ((name.indexOf("  ") != -1) || specialChars.test(name)){
 		window.alert("Invalid input for name!");
 	}

 	else if (age < 0){
 		window.alert("Invalid input for age!");
 	}

 	else if((email.indexOf("@") == -1) || (email.indexOf(".") == -1)){
 		window.alert("Invalid input for email!");
	}

	else{
		const newStudent = new student(studentID, name, age, email, course);		//creating new object
 		studentArray.push(newStudent);										//adding object to the array
	}

 	console.log(studentArray);
}

//function for finding a student using schoolID
function find_student(studentArray){

	let toSearch = document.getElementById("toSearch").value;

 	for (let i=0; i < studentArray.length; i++){

 		if (studentArray[i].studentID == toSearch){
 			var studentID = studentArray[i].studentID;
 			var name = studentArray[i].name;
 			var age = studentArray[i].age;
 			var course = studentArray[i].course;

 			var output = "Student Information:  \n\nStudentID: " + studentID + "\nName: " + name + 
 							"\nAge: " + age + "\nCourse: " + course;

 			console.log(studentArray[i])
 			break;
 		}

 		else{
 			var output = "Student not found.";
 		}
 	}

 	document.getElementById("searched").innerHTML = output;
}


//function for displaying the list
function display_list(array){

	const container = document.getElementById("display");

	for (let i=0; i < array.length; i++){

		let student = document.createElement("pre");
		let displayStudent = document.createTextNode("\nStudent ID: " + array[i].studentID + 
													"\nName: " + array[i].name +
													"\nAge: " + array[i].age + 
													"\nCourse: " + array[i].course + "\n\n");
		student.appendChild(displayStudent);
		container.appendChild(student);

		console.log(array[i]);
		}
}

document.getElementById("currentDate").innerHTML = time_now();
document.getElementById("submitBtn").onclick = function() {add_student(); };
document.getElementById("searchBtn").onclick = function() { find_student(studentArray); };
document.getElementById("displayBtn").onclick = function() { display_list(studentArray); };