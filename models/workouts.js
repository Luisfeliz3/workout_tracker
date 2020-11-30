const mongoose = require("mongoose");

const Schema = mongoose.Schema;

 

const workoutSchema = new Schema(
  {
  day: {
    type : Date,
  default : () => new Date()
},
  exercises:[
    {
    type: {
      type: String,
      trim: true,
      required: "Enter an Exercises type"
    },
  
    name: {
      type: String,
      trim: true,
      required: "Enter Exercises Name"
    },
  
    duration: {
      type: Number,
      required: "Enter the Duration of the Exercise"
    },
  
    weight: {
      type: Number,
   
    },
  
    reps: {
      type: Number,
 
    },
  
    sets: {
      type: Number,
    
    },
    distance: {
      type: Number,
    
    }
  
    }

  ]
},
{
  toJSON: {
    // include any virtual properties When THE data is requested
    virtuals:true
  }
}

);


  // adds dynamically = created property to schema object
  workoutSchema.virtual("totalDuration").get(function(){
// "reduce" arary of exercises down to to just sum of their duration
    return this.exercises.reduce((total, exercise)=>{

      return total + exercise.duration;
    },0)
  })


const Workouts = mongoose.model("workouts", workoutSchema);

module.exports = Workouts;
