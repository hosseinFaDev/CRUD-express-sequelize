const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const lessons = require('../models/lessons');

class insertController {

    insertController (req, res){
        res.sendFile(path.join(__dirname, '../views/insert.html'))
    
        
    }
    insertControllerPost (req, res) {
        try {
            const data = req.body;
            console.log(data);
            lessons.create({
                id: req.body.id
                , lessonName: req.body.lessonName
            });
            res.send("success");
        } catch {
            
            res.send('some erros')
        }
    };
    
}
module.exports=new insertController;
    
    