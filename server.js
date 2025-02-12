require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ dest: "uploads/" });

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "study_planner"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to Database");
});

// API to Upload Syllabus
app.post("/upload-syllabus", upload.single("syllabus"), (req, res) => {
    res.json({ message: "Syllabus uploaded successfully!", file: req.file.path });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
