import mongoose from "mongoose";
import { Schema } from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: { required: true, type: String },
  first_name: { required: true, type: String },
  email: {
    required: true,
    type: String,
    validate: {
        validator: function(v) {
          return /\S+@\S+.\S+/.test(v);
        },
        message: "not a valid email!"
      },
  },
  country: { type: Schema.Types.ObjectId, ref: 'Country' }
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;
