import Student from "../models/student.js";
import Country from "../models/Country.js";

export const getStudents = async (req, res) => {
  try {
    const data = await Student.find();
    res.json(data);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const postStudent = async (req, res) => {
  try {
    const { name, first_name, email } = req.body;
    const newStudent = new Student({ name, first_name, email });
    const data = await Student.create({ name, first_name, email });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const putStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const { name, first_name, email } = req.body;

    let update = {};

    if (name !== undefined) update.name = name;
    if (first_name !== undefined) update.first_name = first_name;
    if (email !== undefined) update.email = email;

    const data = await Student.findByIdAndUpdate(id, update, { new: true });
    res.status(200).json(data);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const putManyStudents = async (req, res) => {
  const { old_first_name } = req.params;
  const old =
    old_first_name.slice(0, 1).toUpperCase() +
    old_first_name.slice(1).toLowerCase();

  try {
    const { first_name } = req.body;

    let update = { first_name: first_name };

    const data = await Student.updateMany({ first_name: old }, update);
    res.status(200).json(data);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const putStudentCountry = async (req, res) => {
  const { id, code } = req.params;
  const codeCap = code.toUpperCase();
  console.log(id, code, codeCap);

  try {
    const country = await Country.findOne({ alpha2Code: codeCap });
    
    console.log(country)
    const update = { country: country._id };
    console.log(update)
    const data = await Student.findByIdAndUpdate(id, update, { new: true });
    res.status(200).json(data);
  } catch (error) {
    res.sendStatus(500);
  }
};
