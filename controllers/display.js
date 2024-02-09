import Country from "../models/Country.js";
import Student from "../models/student.js";

export const displayCountries = async (req, res) => {
  let countriesVisited;
  let countriesNotVisited;
  let students;
  try {
    
    countriesVisited = await Country.find({ visited: true }).sort({
      name: 1,
    });

    students = await Student.find();

    countriesNotVisited = await Country.find({ visited: false }).sort({
      name: 1,
    });
    res.render("pages/index.ejs", {
        countriesVisited: countriesVisited,
        countriesNotVisited: countriesNotVisited,
        students: students
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
