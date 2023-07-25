let { students, studentsId } = require('../database/studentsDatabase');

const studentsListing = (req, res) => {
    return res.status(200).json(students);
}

const getStudentById  = (req, res) => {
    const { id } = req.params;

    const student = students.find((student) => {
        return student.id === Number(id);
    });

    if (!student) {
        return res.status(404).json({ error : "student don't found." });
    }

    return res.status(200).json(student);
}

const createStudent = (req, res) => {
    const { name, lastName, age, course } = req.body;

    if (!name) {
        return res.status(400).json({ error: "name its mandatory" });
    }

    if (!lastName) {
        return res.status(400).json({ error:  "last name its mandatory" });
    }

    if (!age) {
        return res.status(400).json({ error:  "age its mandatory" });
    }

    if (!course) {
        return res.status(400).json({ error:  "course its mandatory" });
    }

    const student = {
        id: studentsId++,
        name,
        lastName,
        age,
        course
    }

    students.push(student);

    return res.status(201).json(student);
}

const deleteStudent = (req, res) => {
    const { id } = req.params;

    const student = students.find((student) => {
        return student.id === Number(id);
    });

    if (!student) {
        return res.status(404).json({ error: "this student don't exist" });
    }

    students = students.filter((student) => {
        return student.id !== Number(id);
    });

    return res.status(204).send();
}

module.exports = { studentsListing, getStudentById, createStudent, deleteStudent };
