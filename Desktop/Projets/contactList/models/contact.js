// bring mongoose coz we making  a schema 4 the db
const mongoose = require('mongoose');
// fonction using schema(model) 4 my contact 
const ContactSchema = mongoose.Schema({
    first_name :{
type : String, 
required: true,
    } ,

    last_name : {
     type :    String, 
    required : true,
    },
    
    phone : {
     type :    String, 
    required : true,
    }

}); 
const Contact =  module.exports = mongoose.model('Contact', ContactSchema);
