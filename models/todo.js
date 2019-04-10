const mongoose = require('mongoose')

const Todo = mongoose.Schema({
    isDone:{
        type:Boolean,
        default:false
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    }

})

module.exports = mongoose.model('todo',Todo)