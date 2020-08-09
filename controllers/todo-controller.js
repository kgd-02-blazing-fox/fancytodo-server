const { ToDo } = require('../models/index.js')
const axios = require('axios')
require('dotenv').config()

class ToDoController {

    //Create TODO
    static async createToDo(req, res, next) {
        let title =  req.body.title;
        let description = req.body.description;
        let status = req.body.status;
        let dueDate = req.body.dueDate;
        let UserId = req.currentUser.id;

        try {
            let createdToDo = await ToDo.create({
                title,
                description,
                status,
                dueDate,
                UserId
            })
            res.status(201).json(
                {
                    title: createdToDo.title,
                    description: createdToDo.description,
                    status: createdToDo.status,
                    dueDate: createdToDo.dueDate,
                    UserId: createdToDo.UserId
                }
            )
        } catch (err) {
            next(err);
        }
    }


    //GET TODO LIST
    static readToDo(req, res, next) {
        ToDo.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err);
            })
    }


    //GET TODO BY ID
    static readToDoById(req, res, next) {
        let todoId = Number(req.params.id)

        ToDo.findByPk(todoId)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }


    //GET TODO BY USERID
    static readToDoByUserId(req, res, next) {
        let currentUserId = req.currentUser.id;
        ToDo.findAll({
            where: {
                UserId: currentUserId
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.send(err)
                next(err);
            })
    }


    //UPDATE TODO LIST
    static updateToDo(req, res, next) {
        let todoId = req.params.id
        let title = req.body.title;
        let description = req.body.description;
        let status = req.body.status;
        let dueDate = req.body.dueDate;

        ToDo.update({
            title,
            description,
            status,
            dueDate
        },
            {
                where: {
                    id: todoId
                },
                returning: true
            })
            .then(result => {
                res.status(200).json(result[1])
            })
            .catch(err => {
                next(err)
            })
    }


    //DELETE TODO
    static deleteToDo(req, res, next) {
        let todoId = Number(req.params.id)
        let obj;

        ToDo.findByPk(todoId)
            .then(result => {
                obj = result

                return ToDo.destroy({
                    where: {
                        id: todoId
                    }
                })
            })
            .then(result => {
                res.status(200).json(obj)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ToDoController;