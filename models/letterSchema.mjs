import mongoose from "mongoose";

// Define the schema letters
const letterSchema = new mongoose.Schema({
  letter: {
    type: Boolean,
    required: [true, "Letter field is required"],
  },
  //Name of the recommender
  recName: {
    type: String,
    required: [true, "Recommendor name is required"],
    index: true,
  },
  gpa: {
    type: Number,
    min: [0, "GPA must be a non-negative number"],
    required: [true, "GPA is required"],
  },
});

export default mongoose.model("Letter", letterSchema);

//------------------------------END CODE----------------------------------------//
