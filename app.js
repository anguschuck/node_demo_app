require("dotenv").config({ path: '.env' });
const express = require("express");
const connectDB = require("./db");
const port = 3000;

// Connect to database
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});