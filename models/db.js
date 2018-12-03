const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/EmployeeDb',{useNewUrlParser:true}, (err)=>{
    if(!err){
    console.log('Mongo db connection established');
}else{

    console.log('Cant establish db connection :' + err);
}
});



require('./employee.model');