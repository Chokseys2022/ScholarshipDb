import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  id: {
    type: { type: Number, index: true },
    required: [true, "ID is required"],
    unique: true,
  },
  studentName: {
    type: String,
    required: [true, "Student name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format",
    ],
  },
  contact: {
    type: Number,
    required: [true, "Contact number is required"],
  },
});

export default mongoose.model("Student", studentSchema);
