const mongoose=require('mongoose');

//connect database
mongoose.connect('mongodb://127.0.0.1:27017/Todo_list-db');

const db=mongoose.connection;

//give error when database not connected
db.on('error',console.error.bind(console,'error connecting to db'));


db.once('open',function(){
    console.log('successfully connect to database');
})