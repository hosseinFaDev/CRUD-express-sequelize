const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const lessons = require('../models/lessons');
class updateController {

    updateControllerPage  (req, res){
        res.sendFile(path.join(__dirname, '../views/update.html'))
    }

    updateControllerUpdate (req, res){
        lessons.update({ lessonName: req.body.lessonName }, {
        where: {
            id: req.body.id
        }
    }).then(res.send('update record was success'))
};
}

module.exports = new updateController;