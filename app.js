const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello world!<h1>");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
