const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create schema for each workout
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "exercise type is required"
        },
        name: {
            type: String,
            trim: true,
            required: "exercise name is required"
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
}, {
    toJSON: {
        virtuals: true
    }
});

// Set to display total workout duration to client side
WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((acc, exercise) => {
        return acc + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;