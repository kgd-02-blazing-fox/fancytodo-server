const {Todo} = require('../models/index')

class ToDoController{
    static postCreateTodo(req,res){
        //console.log('tes yang baru')
        let payload = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date,
            UserId: req.currentUserId
        }
        //console.log(payload)
        Todo.create(payload)
        .then((data)=>{
            res.status(201).json(data)
        }).catch((err)=>{
            // console.log('masuksini')
            if (err.name === "SequelizeValidationError"){
                //console.log('masuksinijuga')
                res.status(400).json(err)
            } else{
                res.status(500).json(err)
            }
        })
    }
    static getListTodos(req,res){
        Todo.findAll()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch((err)=>{
            res.status(500)
        })
    }
    static getOneTodo(req,res){
        console.log(req.params.id)
        Todo.findOne({
            where:{
                id: req.params.id
            }
        })
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{
            res.status(404).json(err)
        })
    }
    static putTodo(req,res){
        let id = req.params.id
        let payload ={
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        }
        Todo.update(payload, 
            {where:{
            id: req.params.id}
        })
        .then((data)=>{
            if (data[0] === 0 ){
                res.status(400).json({
                    msg: 'error not found'
                })
            } else {
                // console.log(data)
                return Todo.findOne({where:{id: id}})
            }
        })
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{
             if (err.name === "SequelizeValidationError"){
                res.status(400).json(err)
            } else{
                res.status(500).json(err)
            }
        })
    }
    static deleteTodo(req, res){
        let id = req.params.id
        let deletedData
        //bingung cara tampung data tanpa global variable

        Todo.findOne({where:{id:id}})
        .then((data)=>{

            deletedData = data

            return Todo.destroy(
                {where:{
                    id: id
                }}
            )
        })
       .then((data)=>{
            if (data === 0){
                res.status(404).json({
                    msg: "error not found"
                })
            } else{
                res.status(200).json(deletedData)
            }
        })
        .catch((err)=>{
            res.status(500)
        })
    }
    static hitEdamam(req, res){
        console.log('ini tes')
    }

}

module.exports = ToDoController