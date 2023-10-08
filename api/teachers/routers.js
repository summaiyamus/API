const express = require("express");
const router = express.Router();

const {
    createTeacher,
    getTeacherById,
    getTeacher,
    updateTeacherById,
    deleteTeacherById
} = require("./teachers.controller");

router.get("/specificTeacher/:id", getTeacherById); 
router.get("/allTeacher/", getTeacher);
router.post("/insertTeacher/", createTeacher);//inserinf data into db

router.patch("/updateTeacher/", updateTeacherById);
router.delete("deleteTeacher/:id", deleteTeacherById);

module.exports = router;
