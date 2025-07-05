// feedback js

const port = 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/feedback", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "feedback.html"));
});




app.post("/feedback", (req, res)=> {
    const feedbackData = {
        name: req.body.name,
        number: req.body.number,
        message: req.body.message, 
        rating: req.body.rating,
    };    
    res.render("displayFeedback", {feedbackData});
});

app.listen(port, () => {
    console.log("server running on local host http://localhost:3000");
});

// let feedback = document.querySelector(".feedback-form");
// feedback.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let number = document.getElementById("number").value;
//     let message = document.getElementById("message").value;
//     let rating = document.getElementById("rating").value;

//     let feedbackData = [
//         {name: name,
//         email: email,
//         message: message
//         },
//     ];
// });