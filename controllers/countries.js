import Country from "../models/Country.js";


export const getCountries = async (req, res) => {
  const { sort } = req.query;
  let data;
  try {
    if (sort === "true") {
      data = await Country.find().sort({visited: -1, name: 1 });
    } else {
      data = await Country.find();
    }
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getCountry = async (req, res) => {
  try {
    res.json(req.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postCountry = async (req, res,next) => {
  try {
    const { name, alpha2Code, alpha3Code } = req.body;
    const newCountry = new Country({ name, alpha2Code, alpha3Code });
    const data = await Country.create({
      name,
      alpha2Code,
      alpha3Code,
      visited: false,
    });
    // res.status(201).json(data);
    res.status(201);
    next()
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const putCountry = async (req, res) => {
  const { name, alpha2Code, alpha3Code } = req.body;
  let update = {};

  try {
    if (name !== undefined) update.name = name;
    if (alpha2Code !== undefined) update.alpha2Code = alpha2Code;
    if (alpha3Code !== undefined) update.alpha3Code = alpha3Code;

    const data = await Country.findByIdAndUpdate(req.id, update, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteCountry = async (req, res,next) => {
  const update = { visited: true };
  try {
    const data = await Country.findByIdAndUpdate(req.body.id, update, {
      new: true,
    });
    res.status(200)
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
