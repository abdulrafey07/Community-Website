// feedback js

const port = 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


let feedbackList = [];

app.get("/feedback", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "feedback.html"));
});




 

app.post("/feedback", (req, res) => {
  const newFeedback = {
    name: req.body.name,
    number: req.body.number,
    message: req.body.message, 
    rating: req.body.rating,
  };

  feedbackList.push(newFeedback);
  res.redirect("/all-feedbacks");
});

app.get("/all-feedbacks", (req, res) => {
  res.render("displayFeedback", { feedbackList });
});

app.listen(port, () => {
    console.log("server running on local host http://localhost:3000");
});

