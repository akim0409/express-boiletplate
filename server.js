const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();
const port = 3001;

app.use(cors({
  credentials: true,
  origin: true
}));
app.use(bodyParser.json());
app.use(cookieParser());


app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});