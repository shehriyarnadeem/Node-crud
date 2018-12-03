const mongoose  = require('mongoose');


var employees_schema = new mongoose.Schema({
   full_name: {
       type : String
   },

   email: {
    type : String
},

   mobile: {
    type : String
 },

   city: {
    type : String
 },
});

mongoose.model('Employee', employees_schema);