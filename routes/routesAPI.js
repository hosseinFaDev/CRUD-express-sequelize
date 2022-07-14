const express = require('express');
const routher = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const insertController = require('../controller/insertController');
const readController = require('../controller/readController');
const updateController = require('../controller/updateController');
const deleteController = require('../controller/deleteController');


routher.get('/insert',insertController.insertController);
routher.post('/insert',insertController.insertControllerPost);
routher.get('/read',readController);
routher.get('/update',updateController.updateControllerPage);
routher.post('/update',updateController.updateControllerUpdate);
routher.get('/delete',deleteController.deleteController);
routher.post('/delete',deleteController.deleteControllerDestroy);



module.exports = routher;
