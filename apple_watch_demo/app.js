const express = require("express");
const path = require("path");
const ejs_mate = require("ejs-mate");
const app = express();

app.use("/public", express.static(path.join(__dirname, 'public')));
app.engine("ejs", ejs_mate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("*", (req, res) => {
    return res.render("landing");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server has started");
});
