

module.exports = function(app) {

  // app.get("/exercise", (req, res) => {
  //   db.Workouts.find({})
  //     .then(dbWorkouts => {
  //       res.json(dbWorkouts);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  
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
};
