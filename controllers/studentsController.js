//get all students list 

// const { response } = require("express");
const mySqlPool = require("../config/db");

const getStudents = async (req, res) => {
    try {
        const data = await mySqlPool.query('SELECT * FROM students')
        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'No Records Found'
            })
        }
        res.status(200).send({
            success: true,
            message: 'All Students Records',
            totalStudents: data[0].length,
            data: data[0],
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Get ALL Students',
            error
        })
    }
};

//GET student by ID
const getStudentsByID = async (req, res) => {
    try {
        const studentId = req.params.id
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: 'Invalid Of Provide student id'
            })
        }
        // const data = await mySqlPool.query(`SELECT * FROM students WHERE id=`+studentId)
        //to prevent sql injection 
        const data = await mySqlPool.query(`SELECT * FROM students WHERE id=?`, [studentId])
        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'no record found'
            })
        }
        res.status(200).send({
            success: true,
            StudentDetails: data[0]
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in get studentsby Id API"
        })
    }

}


//create student
const createStudent = async (req, res) => {
    try {
        const { name, roll_no, fees, class: studentClass } = req.body
        if (!name || !roll_no || !studentClass || !fees) {
            return res.status(500).send({
                success: false,
                message: 'Please Provide all Fields'
            })
        }
        const data = await mySqlPool.query(`INSERT INTO students (name, roll_no, class, fees) VALUES(?, ?, ?, ? )`, [name, roll_no, fees, studentClass])
        if (!data) {
            res.status(404).send({
                success: false,
                message: "Error In INSERT TABLE"
            })
        }
        res.status(201).send({
            success: true,
            message: "New student record created",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error In Create Student API',
            error
        })
    }
};

//update students
const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: "INVALID ID or provide id",
            })
        }
        const { name, roll_no, fees, classname } = req.body;
        const data = await mySqlPool.query(`UPDATE students SET name = ?, roll_no=?, fees=?, classname = ? WHERE id = ?`, [name, roll_no, fees, classname, studentId]);
        console.log(data);
        if (!data) {
            return res.status(500).send({
                success: false,
                message: "ERROR IN UPDATE Data"
            })
        }
        res.status(200).send({
            success: true,
            message: "student details updated"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in update students API",
            error
        })
    }
}

//delete students
const deleteStudents = async(req,res) => {
    try{
        const studentId = req.params.id;
        if(!studentId){
            return res.status(404).send({
                success:false,
                message:'please provide student id and valid student id'
            })
        }
        await mySqlPool.query(`DELETE FROM students WHERE id=?` ,[studentId])
        res.status(200).send({
            success:true,
            message:"student DELETED successfully",
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error In DELETE Student API",
            error
        })
    }

}
module.exports = { getStudents, getStudentsByID, createStudent, updateStudent, deleteStudents };