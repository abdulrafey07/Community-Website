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



let feedbackList = [  // this will store all feedbacks in memory
  {
    name: "xyz",
    number: "1234567890",
    message: "hi",
    rating: "Good",
  }
];



// app.post("/feedback", (req, res)=> {
//     const feedbackData = {
//         name: req.body.name,
//         number: req.body.number,
//         message: req.body.message, 
//         rating: req.body.rating,
//     };    
//     feedbackData.push({name, number, message, rating});
//     res.render("displayFeedback", {feedbackData});
// });

app.post("/feedback", (req, res) => {
  const newFeedback = {
    name: req.body.name,
    number: req.body.number,
    message: req.body.message, 
    rating: req.body.rating,
  };

  feedbackList.push(newFeedback); // ✅ Add new feedback to array

  res.render("displayFeedback", { feedbackData: newFeedback }); // send one entry for display
});

app.listen(port, () => {
    console.log("server running on local host http://localhost:3000");
});

