const express = require("express");
const app = express();

async function addOne() {
  let total = await pool.query(`SELECT sum FROM example`);
  total += 1;
  pool.query(`UPDATE example SET sum = ${total}`)
  return total;
}

app.get("/", (req, res) => {
  res.send("<h1>hello world!<h1>");
});

app.get("/add1", (req, res) => {
  const total = await addOne();

  res.send(`<h1>The total is ${total}!<h1>`);
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
