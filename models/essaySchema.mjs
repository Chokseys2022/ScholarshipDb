import mongoose from "mongoose";

const essaysSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: [true, "Topic is required"],
    enum: [
      "community service",
      "sports",
      "school clubs involvement",
      "success",
    ],
    index: true,
  },
  group: {
    type: String,
    required: [true, "Group is required"],
    enum: ["Latin Alliance", "WHCC", "KAAPA", "CAAPA"],
  },
  award: {
    type: Number,
    required: [true, "Award is required"],
    min: [0, "Award must be a non-negative number"],
  },
});

export default mongoose.model("Essay", essaysSchema);
