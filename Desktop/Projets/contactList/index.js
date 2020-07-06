// import all the module n dependencies 

const express = require('express');
const  cors = require('cors');
const  mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
 
const route = require('./routes/route');
 // connexion btwn our app n mongoDb


 mongoose.connect('mongodb://localhost:27017/contactlist');
// display a message 4 succesfull connexion 

mongoose.connection.on('connected',() =>{
    console.log('Connection established to database @ 27017');
    
});
// display a message 4 succesfull connexion 
mongoose.connection.on('error',(err) =>{
    if (err){
        console.log('Error in database connection : ' + err);
        
    }
}); 


// create a port number 
 const port = 3000;


 // adding middleware

  // adding cors 

 app.use(cors());

 //use bodyParse
 app.use(bodyparser.json());

// 

 app.use(express.static(path.join(__dirname, 'public')));
// testing server 
app.get('/', (req,res) => {
    res.send('Hey it works')
});
// on met toutes les routes /api/klkChoz tout sera dans route
app.use('/api',route)

 // binding server with port 
 app.listen(port,() => {
     console.log('Server started at port: ' +port);
     

 });


