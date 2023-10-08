const express = require("express");
const router = express.Router();

const {
    createStudents,
    getStudentById,
    getStudentsByName,
    getStudents,
    updateStudentsById,
    deleteStudentsById
} = require("./students.controller");

router.get("/specificStudent/:id", getStudentById); 
router.get("/searchStudent/", getStudentsByName); 

router.get("/allStudents/", getStudents);
router.post("/insertStudent/", createStudents);//inserinf data into db

router.patch("/updateStudent/", updateStudentsById);
router.delete("/delStudent/:id", deleteStudentsById);

module.exports = router;
