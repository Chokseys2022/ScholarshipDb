//Imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Essay from "./models/essaySchema.mjs";
import Letter from "./models/letterSchema.mjs";
import Student from "./models/studentSchema.mjs";
import essays from "./utilities/data.js";
import letters from "./utilities/dataL.js";
import students from "./utilities/dataS.js";

//Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:");
  }
})();

//Middleware
app.use(express.json());

//------------------------------------------------
//GET

//Seeded Routes for essays
app.get("/seeds/essays", async (req, res) => {
  try {
    await Essay.deleteMany({});
    await Essay.create(essays);
    res.send(`Essay Database Seeded`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error seeding essays");
  }
});

//Seeded Routes for letters
app.get("/seeds/letters", async (req, res) => {
  try {
    await Letter.deleteMany({});
    await Letter.create(letters);
    res.send(`Letter Database Seeded`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error seeding letters");
  }
});

// //Seeded Routes for students
app.get("/seeds/students", async (req, res) => {
  try {
    await Student.deleteMany({});
    await Student.create(students);
    res.send(`Student Database Seeded`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error seeding students");
  }
});

//--------------------------------------------

//POST

//POST route for essays
app.post("/essays", async (req, res) => {
  try {
    let newEssay = new Essay(req.body);
    await newEssay.save();

    res.json(newEssay);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//POST route for letters
app.post("/letters", async (req, res) => {
  try {
    let newLetter = new Letter(req.body);
    await newLetter.save();

    res.json(newLetter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//POST route for students
app.post("/students", async (req, res) => {
  try {
    let newStudent = new Student(req.body);
    await newEssay.save();

    res.json(newStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});
//----------------------------------------------------------------------

// //PUT/UPDATE

// //PUT route for essays
app.put("/essays/:id", async (req, res) => {
  try {
    const updatedEssay = await Essay.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedEssay);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//PUT route for letters
app.put("/letters/:id", async (req, res) => {
  try {
    const updatedLetter = await Letter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedLetter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//PUT route for students
app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});
//----------------------------------------------------------
//DELETE
//DELETE route for essays
app.delete("essays/:id", async (req, res) => {
  try {
    await Essay.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "Item Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//DELETE route for letters
app.delete("/letters/:id", async (req, res) => {
  try {
    await Letter.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "Item Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//DELETE route for students
app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "Item Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});
//------------------------------------------------------------

//Error handling middleware
app.use((err, _req, res, next) => {
  res.status(500).send("Server Error");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
