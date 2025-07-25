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



// Database connection

const mysql = require("mysql");
const db = mysql.createConnection({
  // host:"yamanote.proxy.rlwy.net",
  // user:"52",
  // password: "nrxAWFSNdPaFIVUvbocMbXGcmhvFDAfQ",
  // database:"railway",
  host: "yamanote.proxy.rlwy.net",   // from your public URL
  user: "root",                       // from your connection URL
  password: "nrxAWFSNdPaFIVUvbocMbXGcmhvFDAfQ",     // paste it from Railway (click "show")
  database: "railway",                // from the connection string
  port: 52770  

});

db.connect((err)=> {
  if(err){
    console.error("MySQL Connection Error: ", err);
  }

  else{
    console.log("MySQL Connected");
  }
})

app.post("/add-event", (req, res) => {
  const {title, description, date, time , location} = req.body;
  const query = "INSERT INTO events (title, description, date, time, location) VALUES (?, ?, ?, ?, ?)";

  db.query(query, [title, description, date, time, location], (err, result)=> {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
}

    else{
      console.log("Event Added Successfully");
      res.redirect("/events");
    }
  });
});


// app.get("/add-event", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "events.html"));
//   db.query("SELECT * FROM events ORDER BY date DESC, time DESC", (err, result)=> {
//     if(err) throw err;
//     res.render("events.ejs", {events: result});
//   });
// });


// Show form
app.get("/add-event", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "events.html"));
});

// Show all events
app.get("/events", (req, res) => {
  db.query("SELECT * FROM events ORDER BY date DESC, time DESC", (err, result)=> {
    if(err) throw err;
    res.render("events.ejs", { events: result });
  });
});







