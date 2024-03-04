import mongoose from "mongoose";

// Define the schema for students
const studentSchema = new mongoose.Schema({
  id: {
    type: Number, 
    required: [true, "ID is required"],
    unique: true,
    index:true,
  },
  studentName: {
    type: String,
    required: [true, "Student name is required"],
    maxlength:[50, "Student name must not exceed 50 char"],
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
    // match: [
    //   /^\d{3}-\d{3}-\d{4}$/,"Invalid contact number format"],//format XXX-XXX-XXXX
      },
});

export default mongoose.model("Student", studentSchema);

//------------------------------END CODE----------------------------------------//