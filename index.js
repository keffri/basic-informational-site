const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
