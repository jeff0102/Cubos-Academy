const express = require('express');
const students = require('../controller/studentsController');

const route = express();

route.get('/students', students.studentsListing);
route.get('/students/:id', students.getStudentById);
route.post('/students', students.createStudent);
route.delete('/students/:id', students.deleteStudent);

module.exports = route;
