const mongoose=require('mongoose');
  
//create structure for document i.e schema
const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    category:{
        type:String,
    },
    date:{
        type:String,
        default:Date.now,
        required:true
    }

})

const TodoList=mongoose.model('TodoList',todoSchema);
module.exports=TodoList;