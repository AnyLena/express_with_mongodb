import express from "express"
import { displayCountries } from "../controllers/display.js";

const displayRouter = express.Router()

displayRouter.get("/", displayCountries)

export default displayRouter; 