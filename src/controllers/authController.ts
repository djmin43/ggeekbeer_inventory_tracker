
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const User = require('../db/models/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../config/.env'})
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())


module.exports.signUp = async (req: any, res: any) => {
    const {userId, userName, password} = req.body
    try {
        bcrypt.genSalt(10, function(err: any, salt: any) {
            bcrypt.hash(password, salt, async function(err: any, hash:any) {
                const singUp = await User.query().insert({
                    user_name: userName,
                    user_id: userId,
                    password: hash
                })
            });
        });
        res.status(200).json({msg: 'new user has been created'})
    } catch(error) {
        console.log(error)
    }
}


module.exports.logIn = async (req: any, res: any) => {
    const {userId, password} = req.body
    try {
        const user = await User.query().select('user_id', 'password').where('user_id', userId)
        if (user.length === 1) {
            const auth = await bcrypt.compare(password, user[0].password)
            if (auth) {
                // bcrypt가 비밀번호를 확인 후, jwt cookie를 만든다. 
                const token = await createToken(user[0].user_id)
                await res.cookie('token', token, {httpOnly: true})
                await res.status(200).json({msg:'log in successful!'})                
                // const decoded = await jwt.verify(token, process.env.TOKEN_SEC)
                // await console.log(process.env.TOKEN_SEC)
            } else {
                res.status(401).json({msg: 'unauthorized'})
            }
        // Error handling if the user is not found, or if it's bad request.
        } else if (user.length === 0) {
            res.status(200).json({msg: 'no user found'})
        } else {
            res.status(400).json({msg: 'bad request'})
        }
    } catch(error) {
        throw Error
    }
}

const createToken = (id: string) => {
    return jwt.sign({id}, process.env.TOKEN_SEC, {
        expiresIn: "7 days"
    })
};

export {}