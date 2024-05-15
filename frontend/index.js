const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.static("./src"));

app.listen(3000);
