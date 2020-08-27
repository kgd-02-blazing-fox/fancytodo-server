"use strict"

const { Todo } = require("../models/index.js")
const axios = require("axios")
const {emailerTodoAdd} = require("../helper/emailer.js")

class TodoController {
    static async post (req,res,next) {
        let form = {
            title: req.body.title,
            description: req.body.description,
            due_date: new Date(req.body.due_date),
            userId:req.access_id
        }
        try {
            const result = await Todo.create(form)
            emailerTodoAdd(req.access_id,form)
            res.status(201).json(result.dataValues)
        } catch (err) {
            next(err)
        }
    }
    static async get (req,res,next) {
        try {
            const quote = await axios({
                method: 'GET',
                url: 'https://quote-garden.herokuapp.com/api/v2/quotes/random',
              });
            const list = await Todo.findAll({where:{userId:req.access_id},order:[["createdAt","DESC"]]})
            res.status(200).json({todos:list,quote:{quoteText:quote.data.quote.quoteText,quoteAuthor:quote.data.quote.quoteAuthor}})
        } catch(err) {
            next(err)
        }
    }
    static async getSpecific (req,res,next) {
        try {
            const result = await Todo.findOne({where:{id:req.params.id}})
            if (!result) throw new Error("File not Found")
            res.status(200).json(result)
        } catch(err) {
            next(err)
        }
    }
    static async patchSpecific (req,res,next) {
        let form = {
            status: req.body.status,
        }
        try {
            const result = await Todo.update(form,{where:{id:req.params.id},returning:true})
            if (!result[0]) throw new Error("File not Found")
            res.status(200).json(result[1][0])
        } catch(err) {
            next(err)
        }
    }
    static async delSpecific (req,res,next) {
        try {
            const returning = await Todo.findOne({where:{id:req.params.id}})
            if (!returning) throw new Error("File not Found")
            if (returning.status){
                const destroyed = await Todo.destroy({where:{id:req.params.id}})
                res.status(200).json(returning)
            }
            else {
                throw new Error("Invalid todo status")
            }
        } catch(err) {
            next(err)
        }
    }
}

module.exports = TodoController