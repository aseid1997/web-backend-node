const express = require('express');
const { addStudent, getStudents, getStudent, updateStudent, deleteStudent } = require('../controllers/StudentController');

const router = express.Router();

router.post('/student',addStudent);
router.get('/students',getStudents);
router.get('/student/:id',getStudent);
router.put('/student/:id',updateStudent);
router.delete('/student/:id',deleteStudent);

module.exports = {
    routes : router
}