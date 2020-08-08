"use strict"

const nodemailer = require("nodemailer")
const {User,Todo} = require("../models")

function emailerReg(firstname,lastname,email,password) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.DUMMY_EMAIL_ACCOUNT,
            pass: process.env.DUMMY_EMAIL_PASSWORD
        }
    })
        let mailOptions = {
            from: 'Todo List <Todo@list.com>',
            to: `${firstname} ${lastname} <${email}>`,
            subject: 'Welcome to the todo App!',
            html:`
            <h2>Welcome to the todo App!</h2>
            <p>You have registered in our service recents ago, Here are your credentials listed in us:</p>
            <ul>
                <li>First Name : ${firstname}</li>
                <li>Last Name  : ${lastname}</li>
                <li>Full Name  : ${firstname} ${lastname}</li>
                <li>Email      : ${email}</li>
                <li>Password   : ${password}</li>
            </ul>

            <p>Thank you for trusting us and enjoy our app!</p>
            <p>regards,</p>
            <br>
            <p>Laurentius Edrick</p>
            <hr>
            `
        }
        transporter.sendMail(mailOptions)
}

function GemailerReg(fullname,email,password) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.DUMMY_EMAIL_ACCOUNT,
            pass: process.env.DUMMY_EMAIL_PASSWORD
        }
    })
        let mailOptions = {
            from: 'Todo List <Todo@list.com>',
            to: `${fullname} <${email}>`,
            subject: 'Welcome to the todo App!',
            html:`<h2>Welcome to the todo App!</h2>
            <p>You have registered in our service via Google Sign-in recents ago, Here are your credentials listed in us:</p>
            <ul>
                <li>Name : ${fullname}</li>
                <li>Email      : ${email}</li>
                <li>Password   : ${password}</li>
            </ul>

            <p>You can change your password later, or you can keep logging in with Google!</p>
            <p>Thank you for trusting us and enjoy our app!</p>
            <p>regards,</p>
            <br>
            <p>Laurentius Edrick</p>
            <hr>
            `
        }
        transporter.sendMail(mailOptions)
}



function emailerTodoAdd(id,data) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.DUMMY_EMAIL_ACCOUNT,
            pass: process.env.DUMMY_EMAIL_PASSWORD
        }
    })
    User.findOne({where:{id}})
        .then(user=>{
            let mailOptions = {
                from: 'Todo List <Todo@list.com>',
                to: `${user.fullname} <${user.email}>`,
                subject: 'You have created a todo!',
                html:`
                <h2>You have created a todo recently!</h2>
                <p>Here are your basic information of the recent todo:</p>
                <ul>
                    <li>Title : ${data.title}</li>
                    <li>Description  : ${data.description}</li>
             
                    <li>Due date  : ${data.due_date.toString()} <br></li>
                </ul>
    
                <p>Thank you for trusting us and enjoy our app!</p>
                <p>regards,</p>
                <br>
                <p>Laurentius Edrick</p>
                <hr>
                `
            }
            transporter.sendMail(mailOptions)
        })
        .catch(err=>{throw new Error(err)})
}

module.exports = {emailerReg,emailerTodoAdd,GemailerReg}
