import express from 'express'
import studentRouter from './routes/students.js';
import 'dotenv/config'
import { connectDatabase } from './client/client.js';


const app = express()
const port = 3000;

app.use(express.json())
app.use("/students", studentRouter)

const startServer = async () => {
    await connectDatabase();
    app.listen(port, ()=> {
        console.log(`App listening on port ${port}`)
    })
}

startServer().catch(error => {
    console.log(error, "Failed to start server.")
})