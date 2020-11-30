const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;



const databaseUrl = "workouts";
const collections = ['workouts']
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { 
  useNewUrlParser: true,
  useFindAndModify: false

});

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/api-route"));
app.use(require("./routes/html-route"));




app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});