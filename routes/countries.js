import express from "express";
import { getCountries, postCountry, getCountry, putCountry, deleteCountry } from "../controllers/countries.js";
import { checkCountryCode } from "../middlewares/checkCountryCode.js";
import { displayCountries } from "../controllers/display.js";
import methodOverride from 'method-override'

const countriesRouter = express.Router()

countriesRouter.get("/", getCountries)
countriesRouter.get("/:code", checkCountryCode, getCountry)
countriesRouter.post("/", methodOverride('_method'), postCountry, displayCountries)
countriesRouter.post("/delete", methodOverride('_method'), deleteCountry, displayCountries)
countriesRouter.put("/:code", checkCountryCode, putCountry)
countriesRouter.delete("/", deleteCountry)
// countriesRouter.delete("/:code", checkCountryCode, deleteCountry)

export default countriesRouter; 