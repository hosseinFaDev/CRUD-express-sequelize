const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000 ;
const lesson = require('./models/lessons');
const router = require('./routes/routesAPI');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();



//////***** for useing web interface uncomment this ******//////
//for insert data go to this link => http://localhost:3000/api/insert
//for read data go to this link   => http://localhost:3000/api/read
//for update data go to this link => http://localhost:3000/api/update
//for delete data go to this link => http://localhost:3000/api/delete

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',router);



lesson.sync().then(() => {
    // Now the `lesson` table in the database match to the model definition
   app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
});
   
  }).catch(error => {
    console.log('some erorrs', error);
});






//////******//////for useing code base interface uncomment this///////******//////
/////next 5 line code , just run 1 time for sync and then comment it and go for CRUD

// lesson.sync({ force: true }).then(() => {
//     // Now the `lessons` table in the database corresponds to the model definition
//     console.log('sync with database is done');
// });
    
//     // Create a new lesson
//     lesson.create({ id: "1", lessonName: "Data structure" }).then(id => {
//   console.log(`new record add seccuss with id:${id}`);
// });
    // // Find all lesson's
    // lesson.findAll().then(lesson => {
    //     console.log("All lesson:", JSON.stringify(lesson));
    // });
    

  // Delete lesson with id 1
//   lesson.destroy({
//     where: {
//           id: "1"
//         }
//       }).then(() => {
//             console.log("Done");
//   });

// // Change Math to Data structure
//   lesson.update({ lessonName: "math" }, {
//         where: {
//         lessonName: 'Data structure'
//     }
//   }).then(() => {
//         console.log("Done");
//       });
    
  
    
