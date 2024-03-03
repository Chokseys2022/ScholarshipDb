import mongoose from "mongoose";

const letterSchema = new mongoose.Schema({
  letter: {
    type: Boolean,
    required: [true, "Letter field is required"],
  },
  recName: {
    type: { type: String, index: true },//indexing recommender name
    required: [true, "Recommendor name is required"],
  },
  gpa: {
    type: Number,
    min: [0, "GPA must be a non-negative number"],
    required: [true, "GPA is required"],
  },
});

export default mongoose.model("Letter", letterSchema);
