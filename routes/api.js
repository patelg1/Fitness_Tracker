const router = require('express').Router();
const Workout = require('../models/Workout.js');

// Route for retrieving workouts and adding total duration
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])    
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    })
});

// Route for adding new workout
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    })
});

//Route for updating workout
router.put('/api/workouts/:id', ({body, params}, res) => {
    //const setDate = new Date().setDate(new Date().getDate()-10)
    Workout.findByIdAndUpdate(
        {_id: params.id},
        {$push: {exercises: body}},
        {new: true}
    ).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    })
});

// Route for retrieving workout range
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: '$exercises.duration'},
                totalWeight: {$sum: '$exercises.weight'}
            }
        }
    ])
    .sort({day: -1})
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;