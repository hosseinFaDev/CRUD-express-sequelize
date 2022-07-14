const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const lessons = require('../models/lessons');


readController = (req, res)=>{
    lessons.findAll().then(lessons => res.send(lessons))
}

module.exports = readController;

