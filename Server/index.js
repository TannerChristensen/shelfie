const { config } = require("dotenv/types");
const express = require("express")
const controller = require("./controller")
const dotenv = require(config(".env"))
const massive = require(massive)

const app = express();

app.get("/", (req, res) => {
  res.send("This is from index.js");
});

app.listen(4000, () => {
  console.log("server started on port 4000");
})

