import mongoose from "mongoose";

//define essay schema
const essaysSchema = new mongoose.Schema({
 //essay topics
  topic: {
    type: String,
    required: [true, "Topic is required"],
    enum: [
      "community service",
      "sports",
      "school clubs involvement",
      "success",
    ],
    index: true, //indexed topic
  },
  //club awarding schoarships
  group: {
    type: String,
    required: [true, "Group is required"],
    enum: ["Latin Alliance", "WHCC", "KAAPA", "CAAPA"],
  },
  //dollar amount awarded
  award: {
    type: Number,
    required: [true, "Award is required"],
    min: [0, "Award must be a non-negative number"],
  },
});

export default mongoose.model("Essay", essaysSchema);
