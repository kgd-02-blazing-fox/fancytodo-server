"use strict"

const { Todo } = require("../models/index.js")

class TodoControllers {
    static async postTodosHandler (req,res) {
        let form = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: new Date(req.body.due_date),
        }
        try {
            const result = await Todo.create(form)
            res.status(201).json(result.dataValues)
        } catch (err) {
            if (err.name === "SequelizeValidationError")
            res.status(400).json(err)
            else res.status(500).json(err)
        }
    }
    static async getTodosHandler (req,res) {
        try {
            const list = await Todo.findAll({})
            res.status(200).json(list)
        } catch(err) {
            res.status(500).json(err)
        }
    }
    static async getSpecificTodosHandler (req,res) {
        try {
            const result = await Todo.findOne({where:{id:req.params.id}})
            if (!result) throw new Error("File not Found")
            res.status(200).json(result)
        } catch(err) {
            if (err.message === "File not Found") res.status(404).json({'error' : "File not Found"})
            else res.status(500).json(err)
        }
    }
    static async putSpecificTodosHandler (req,res) {
        let form = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: new Date(req.body.due_date),
        }
        try {
            const result = await Todo.update(form,{where:{id:req.params.id},returning:true})
            if (!result[0]) throw new Error("File not Found")
            res.status(200).json(result[1][0])
        } catch(err) {
            console.log(err)
            if (err.name === "SequelizeValidationError")res.status(400).json(err)
            else if (err.message === "File not Found") res.status(404).json({'error' : "File not Found"})
            else res.status(500).json(err)
        }
    }
    static async delSpecificTodosHandler (req,res) {
        try {
            const returning = await Todo.findOne({where:{id:req.params.id}})
            if (!returning) throw new Error("File not Found")
            const destroyed = await Todo.destroy({where:{id:req.params.id}})
            res.status(200).json(returning)
        } catch(err) {
            if (err.message === "File not Found") res.status(404).json({'error' : "File not Found"})
            else res.status(500).json(err)
        }
    }
}

module.exports = TodoControllers