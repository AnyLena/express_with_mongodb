import express from 'express'
import { getStudents, postStudent, putStudent, putManyStudents, putStudentCountry } from '../controllers/students.js'

const studentRouter = express.Router()

studentRouter.get("/", getStudents)
studentRouter.post("/", postStudent)
studentRouter.put("/:id", putStudent)
studentRouter.put("/firstname/:old_first_name", putManyStudents)
studentRouter.put("/:id/:code", putStudentCountry)


export default studentRouter