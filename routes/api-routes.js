var db = require("../models");

module.exports = function(app) {
    // API route to view all the workouts
    app.get("/api/workouts", (req, res) => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });

    // API route to post a new workout
    app.post("/api/workouts", ({ body }, res) => {
      db.Workout.create(body)
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });

    // API route to find a workout and update it
    app.put("/api/workouts/:id", (req, res) => {
      db.Workout.findByIdAndUpdate({
          _id: req.params.id,
        },
        { 
          $push: { exercises: req.body }
        }, 
        { 
          new: true 
        })
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });

    // API route to view the workouts statistics
    app.get("/api/workouts/range", (req, res) => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
}