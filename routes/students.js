import express from 'express'
import { getStudents, postStudent, putStudent, putManyStudents } from '../controllers/students.js'

const studentRouter = express.Router()

studentRouter.get("/", getStudents)
studentRouter.post("/", postStudent)
studentRouter.put("/:id", putStudent)
studentRouter.put("/firstname/:old_first_name", putManyStudents)

export default studentRouter