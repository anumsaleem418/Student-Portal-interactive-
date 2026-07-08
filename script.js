// =====================================
// Student Performance Portal
// Week 2 - script.js
// =====================================

// ------------------------------
// Student Data
// ------------------------------

const students = [

    {
        name: "Ali Ahmed",
        className: "BSCS",
        marks: 85,
        grade: "A"
    },

    {
        name: "Sara Khan",
        className: "BSIT",
        marks: 72,
        grade: "B"
    },

    {
        name: "Usman Ali",
        className: "BSSE",
        marks: 58,
        grade: "C"
    },

    {
        name: "Ayesha Noor",
        className: "BBA",
        marks: 91,
        grade: "A+"
    },

    {
        name: "Hamza Tariq",
        className: "BSCS",
        marks: 66,
        grade: "B"
    }

];

// ------------------------------
// Login Form
// ------------------------------

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value.trim();

        // Validation

        if (username === "" || password === "") {

            alert("Please fill all fields.");

            return;

        }

        // Demo Login

        if (username === "admin" && password === "1234") {

            alert("Login Successful!");

            document.getElementById("dashboard")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

        else {

            alert("Invalid Username or Password");

        }

    });

}

// ------------------------------
// Load Dashboard
// ------------------------------

function loadDashboard() {

    const table =
        document.getElementById("studentTable");

    if (!table) return;

    table.innerHTML = "";

    let totalMarks = 0;
    let passedStudents = 0;

    students.forEach(student => {

        totalMarks += student.marks;

        if (student.marks >= 50) {

            passedStudents++;

        }

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

    document.getElementById("averageMarks").innerText =
        (totalMarks / students.length).toFixed(1) + "%";

    document.getElementById("passedStudents").innerText =
        passedStudents;

}

// ------------------------------
// Search Student
// ------------------------------

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value =
            this.value.toLowerCase();

        const rows =
            document.querySelectorAll("#studentTable tr");

        rows.forEach(row => {

            const text =
                row.innerText.toLowerCase();

            row.style.display =
                text.includes(value)
                ? ""
                : "none";

        });

    });

}

// ------------------------------
// Mobile Navigation
// ------------------------------

function toggleMenu() {

    const nav =
        document.getElementById("navMenu");

    nav.classList.toggle("active");

}

// ------------------------------
// Contact Button
// ------------------------------

function sendMessage() {

    alert("Message Sent Successfully!");

}

// ------------------------------
// Load Data
// ------------------------------

window.onload = loadDashboard;
