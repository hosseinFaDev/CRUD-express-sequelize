const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const lessons = require('../models/lessons');

class deleteController {
    deleteController (req, res) {
        res.sendFile(path.join(__dirname, '../views/delete.html'))
    };
    
    deleteControllerDestroy (req, res){
        try {
            lessons.destroy({
                where: { id: req.body.id }
            }
            ).then(res.send('delete record was success'));
        } catch {
    
            res.send('some erros')
        }
    };

}

module.exports =new deleteController;