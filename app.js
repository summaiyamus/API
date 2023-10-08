// Import the dotenv package and call the config function
require("dotenv").config();

const express = require("express");
const path = require("path")
const app = express();
const routerStudents = require("./api/students/routers");
const routerBooks = require("./api/books/routers");
const routerTeacher = require("./api/teachers/routers");

app.use(express.json());



app.use(express.static('views'));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs')

//api routes
app.use("/api", routerStudents);
app.use("/api", routerBooks);
app.use("/api", routerTeacher);

/////
app.get("/", (req, res) => {

  res.render("buttons");
});
//html routes for STUDENTS
app.get("/StudentsOperations", (req, res) => {
  res.render("StudentsOperations"); 
});

app.get("/allStudents", (req, res) => {

  res.render("StudentTotal");
});

app.get("/searchStudent", (req, res) => {
  res.render("StudentSearch");
});

app.get("/insertStudent", (req, res) => {

  res.render("StudentInsert");
});

app.get("/updateStudent", (req, res) => {

  res.render("StudentEdit");
});
app.get("/delStudent", (req, res) => {

  res.render("StudentDel");
});

//html routes for books.
app.get("/booksOperations", (req, res) => {
  res.render("booksOperations"); 
});
app.get("/allBooks", (req, res) => {

  res.render("bookTotal");
});

// app.get("/specificBook/", (req, res) => {
//   res.render("bookSpecific");
// });
app.get("/searchBooks", (req,res)=>{
  res.render("bookSearch");
});
app.get("/updateBook", (req,res)=>{
  res.render("bookEdit");
});
app.get("/delBook", (req,res)=>{
  res.render("bookDel");
});

app.get("/insertBook", (req, res) => {

  res.render("bookInsert");
});

//html routes for teachers.
app.get("/TeacherOperations", (req, res) => {
  res.render("TeacherOperations"); 
});
app.get("/allTeacher", (req, res) => {

  res.render("TeacherTotal");
});

app.get("/specificTeacher", (req, res) => {
  res.render("TeacherSpecific");
});

app.get("/insertTeacher", (req, res) => {

  res.render("TeacherInsert");
});


const port = process.env.APP_PORT || 3001;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("App is running on port", port);
});
