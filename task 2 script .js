let students = [
{
name:"Ali",
className:"10th",
marks:88,
grade:"A"
},
{
name:"Sara",
className:"9th",
marks:76,
grade:"B"
},
{
name:"Ahmed",
className:"10th",
marks:92,
grade:"A+"
}
];

function loadDashboard(){

let table =
document.getElementById("studentTable");

table.innerHTML = "";

students.forEach(student => {

table.innerHTML += `
<tr>
<td>${student.name}</td>
<td>${student.className}</td>
<td>${student.marks}</td>
<td>${student.grade}</td>
</tr>
`;

});

document.getElementById("totalStudents").innerText =
students.length;

let total =
students.reduce((sum,s)=>sum+s.marks,0);

document.getElementById("averageMarks").innerText =
Math.round(total/students.length) + "%";

document.getElementById("passedStudents").innerText =
students.filter(s=>s.marks>=50).length;

}

loadDashboard();

document
.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault();

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(username==="" || password===""){
alert("Please fill all fields");
return;
}

alert("Login Successful!");

});

document
.getElementById("reportForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("studentName").value;

let className =
document.getElementById("studentClass").value;

let marks =
document.getElementById("studentMarks").value;

if(name==="" || className==="" || marks===""){
alert("Fill all fields");
return;
}

let grade="";

if(marks>=90)
grade="A+";
else if(marks>=80)
grade="A";
else if(marks>=70)
grade="B";
else
grade="C";

students.push({
name,
className,
marks:Number(marks),
grade
});

loadDashboard();

alert("Student Added Successfully");

this.reset();

});

document
.getElementById("searchInput")
.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let rows =
document.querySelectorAll("#studentTable tr");

rows.forEach(row=>{

row.style.display =
row.innerText.toLowerCase()
.includes(value)
? ""
: "none";

});

});

function sendMessage(){
alert("Message Sent Successfully!");
}

function toggleMenu(){

document
.getElementById("navMenu")
.classList.toggle("active");

}