const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
    res.send("welcome");
});

app.get("/onlyUnderscore", function (req, res) {
    let str = req.headers["str"];
    let replacedStr = str.replace(/[^a-zA-Z0-9]+/g, "_");
    replacedStr = replacedStr.replace(/_$/, "");
    res.send(replacedStr);
});

app.listen(3000);
