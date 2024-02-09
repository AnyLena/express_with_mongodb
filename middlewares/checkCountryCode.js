import Country from "../models/Country.js";

export const checkCountryCode = async (req, res, next) => {
  let { code } = req.params;
  code = code.toUpperCase();
  const alphaCode = { [`alpha${code.length}Code`]: code };
  if (code.length > 3) {
    res.status(404).send("Invalid Country code");
  } else {
    const data = await Country.findOne(alphaCode);
    if (!data) {
      res.status(404).send("Country not available");
    } else {
      req.data = data;
      req.id = data._id;
    }
  }
  next();
};
