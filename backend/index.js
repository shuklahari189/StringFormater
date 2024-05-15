const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
    res.send("welcome");
});

app.get("/onlyUnderscore", function (req, res) {
    let str = req.headers["str"];
    let arrWithNoSpace = str.replace(/\s+/g, "_");
    let arrWithNoDots = arrWithNoSpace.replace(/\./g, "");
    let arrWithNoExclamationMark = arrWithNoDots.replace(/!/g, "");
    res.send(arrWithNoExclamationMark);
});

app.listen(3000);
