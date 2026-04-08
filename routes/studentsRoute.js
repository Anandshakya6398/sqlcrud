const express = require("express");
const { getStudents } = require("../controllers/studentsController");

//router onject

const router = express.Router();
//routes

//Get all students list || GET

router.get('/getall', getStudents);

module.exports = router