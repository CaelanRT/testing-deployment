require("dotenv/config");
const express = require("express");
const app = express();
const { pool } = require("./db/index.js");

app.use(express.json());

async function addOne() {
  const result = await pool.query(`SELECT * FROM example`);

  let total = result.rows[0].sum;

  total += 1;
  await pool.query(`UPDATE example SET sum = ${total}`);
  return total;
}

async function getTotal() {
  const result = await pool.query("SELECT * FROM example");

  return result.rows[0].sum;
}

app.get("/", (req, res) => {
  res.send("<h1>hello world!<h1>");
});

app.get("/total", async (req, res) => {
  const total = await getTotal();
  res.status(200).send(`<h1>The current value is ${total}</h1>`);
});

app.get("/add1", async (req, res) => {
  const total = await addOne();

  res.send(`<h1>The total is ${total}!<h1>`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
