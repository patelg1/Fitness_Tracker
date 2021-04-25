const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter a exercise type'
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter a exercise name'
            },
            duration: {
                type: Number,
                default: 0,
                required: 'Enter a exercise duration'
            },
            weight: {
                type: Number,
                default: 0,
            },
            reps: {
                type: Number,
                default: 0,
            },
            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            }
        }
    ],
    
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;