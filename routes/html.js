const router = require('express').Router();
const path = require('path');

// Display homepage
router.get('/', function (req, res)  {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Display exercise page
router.get('/exercise', function (req, res)  {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// Dispaly stats page
router.get('/stats', function (req, res)  {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;