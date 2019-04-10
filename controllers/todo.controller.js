const Todo = require('../models/todo')
exports.getTodos = function(req,res){
    Todo.find()
    .then((todos)=>{
        console.log(12233)
      return res.status(200).json({status:200,data:todos , message:' all avalble todos'})
    })
    .catch(err=>{
        return res.status(404).json({status:404,message:'bad request'})
    })

}

exports.createTodo=function(req,res){
    const {isDone,description,title} = req.body
    let newTodo = new Todo({
        isDone:isDone,
        title,
        description
    })
    
     newTodo.save()
    .then((todo)=>{
       return res.status(201).json({status:201,data:todo,message:'succcessfuly created Todo'})
    })
    .catch(err=>{
        return res.status(400).json({status:400,message:'todo creation was unsuccessfuly'})
    })
}

exports.deleteTodo= async function(req,res){
    let id = req.params.id
    if(!id){
        return res.status(400).json({status:400,message: 'Todo does not exisit'})
    }else{
        try{
           let deletedTodo = await Todo.findById(id)
           await deletedTodo.remove()
           return res.status(204).json({status:204,message:'Todo was saccessfuly Deleted'})
        }
        catch(e){
           return res.status(400).json({status:400,message:e.message})
        }

    }
   
}

exports.udateTodo= function(req,res){
    const id = req.params.id
    if(id==null){
        return res.status(400).json({status:400,message: 'Todo does not exisit'})
        
    }
    else{
        let {title,description,isDone} = req.body
        Todo.findById(id)
        .then(todo=>{
            todo.isDone = isDone;
            todo.description = description
            todo.title  = title
            console.log(todo)
             return todo.save()
        })
        .then((todo)=>{
           return res.status(200).json({status:200,data:todo,message:'Todo was updated successfuly'})
        })
        .catch(err=>{
            return res.status(400).json({status:400,message: 'Todo does not updated'})
        })

    }
    
}