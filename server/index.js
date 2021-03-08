const express = require("express");
const createConnection = require("./db/connection");
const { User } = require("./models/user");
const app = express();
createConnection();
const port = 3000;

// localhost:3000
app.get("/", (req, res) => {
  res.json({
    message: "Home 🏠",
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "API is Working ✅",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
