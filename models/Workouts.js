const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// {
//   type: "resistance",
//   name: "Bicep Curl",
//   duration: 20,
//   weight: 100,
//   reps: 10,
//   sets: 4
// }


const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Type is Required"
  },

  name: {
    type: String,
    trim: true,
    required: "Exercises Name is Required"
  },

  duration: {
    type: Number,
    unique: false,
    required: true
  },

  weight: {
    type: Number,
    unique: false,
    required: true
  },

  reps: {
    type: Number,
    unique: false,
    required: true
  },

  sets: {
    type: Number,
    unique: false,
    required: true
  }
});

// WorkoutSchema.methods.setFullName = function() {
//   this.fullName = `${this.firstName} ${this.lastName}`;

//   return this.fullName;
// };

// WorkoutSchema.methods.lastUpdatedDate = function() {
//   this.lastUpdated = Date.now();

//   return this.lastUpdated;
// };


const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;
