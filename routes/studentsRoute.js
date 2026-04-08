const express = require("express");
const { getStudents, getStudentsByID, createStudent, updateStudent, deleteStudents } = require("../controllers/studentsController");

//router onject

const router = express.Router();
//routes

//Get all students list || GET

router.get('/getall', getStudents);

//GET STUDENTS BY ID
router.get('/get/:id', getStudentsByID)

//CREATE STUDENT || POST
router.post('/create', createStudent)

//update students
router.put('/update/:id', updateStudent)
//delete students
router.delete('/delete/:id', deleteStudents)
module.exports = router