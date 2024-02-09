import mongoose, { Schema } from "mongoose";

const CountrySchema = new mongoose.Schema({
  name: { required: true, type: String },
  alpha2Code: {
    type: String,
    validate: {
      validator: function (v) {
        return /[A-Z][A-Z]/.test(v);
      },
      message: (props) => `${props.value} is not a valid alpha-2 code!`,
    },
    required: [true, "Alpha-2 code required"],
    unique: [true, "Alpha-2 code must be unique"],
  },
  alpha3Code: {
    type: String,
    validate: {
      validator: function (v) {
        return /[A-Z][A-Z][A-Z]/.test(v);
      },
      message: (props) => `${props.value} is not a valid alpha-2 code!`,
    },
    required: [true, "Alpha-3 code required"],
    unique: [true, "Alpha-3 code must be unique"],
  },
  visited: {required: true, type: Boolean, }
});

const Country = mongoose.model("Country", CountrySchema);

export default Country;
