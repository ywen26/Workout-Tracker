var db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });

    app.post("/api/workouts", ({ body }, res) => {
      db.Workout.create(body)
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
      db.Workout.findByIdAndUpdate(req.params.id, 
        { 
          $push: { exercise: req.body }
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