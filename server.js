const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



const PORT = process.env.PORT || 3000;
// const db = require("./models");




// require("./route/api-route");
// require("./route/html-route");




const databaseUrl = "workouts";
const collections = ['workouts']
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true });



// db.User.create({ name: "Rookie Rooks" })
//   .then(dbUser => {
//     console.log(dbUser);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });


app.get("", (req, res) => {
  res.send(index.html);
});


app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});


// app.get("/exercise", (req, res) => {
//   db.Workouts.find({}, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.json(data);
//     }
//   });
// });


// app.post("/submit", ({ body }, res) => {
//   db.Workouts.create(body)
//     .then(({ _id }) => db.Workouts.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


// app.get("/exercise", (req, res) => {
//   db.Workouts.find({})
//     .populate("workouts")
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});