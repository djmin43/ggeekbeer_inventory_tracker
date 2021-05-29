import { Request, Response } from "express"
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


module.exports.verifyUser = async (req: Request, res: Response) => {
    const clientToken = req.cookies.ggeek_member;
    try {
        if(clientToken) {
            const decoded = await jwt.verify(clientToken, process.env.TOKEN_SEC);
            const verifyUser = await User.query().select('user_id', 'user_name').where('user_id', decoded.id)
            console.log(verifyUser)
            res.status(200).json(verifyUser[0])
        } else{
            res.status(401).json({ msg: 'unauthorized'})
        }
    } catch(err) {
        res.status(401).json({ msg: 'unauthorized'})
    }
}


module.exports.signUp = async (req: Request, res: Response) => {
    const {userId, userName, password, code} = req.body
    try {
        // Basic Validation
        if (code !== process.env.CODE) {
            res.status(401).json({msg: '코드가 틀렸습니다. 다시 확인해주세요.'})
        } 
        else if (userId === '' || userName === '' || password === '' || code === '' ) {
            res.status(401).json({msg: `empty spaces`})
        } 
        // If validation passes!
        else {
            bcrypt.genSalt(10, function(err: Error, salt: any) {
                bcrypt.hash(password, salt, async function(err: Error, hash:any) {
                    try {
                        const singUp = await User.query().insert({
                            user_name: userName,
                            user_id: userId,
                            password: hash
                        })
                        res.status(200).json({msg: `${userId}의 새로운 아이디가 생성되었습니다. 로그인 해주세요.`})
                    } catch(error) {
                        // Error code 23505 -> unique id contraint
                        if (error.nativeError.code === `23505`) {
                            res.status(400).json({msg: `이미 존재하는 아이디입니다. 새로운 아이디로 다시 가입해주세요.`})
                        } else {
                            console.log(error)
                        }
                    }
                });
            });
        }
    } catch(error) {
        console.log(error)
    }
}


module.exports.logIn = async (req: any, res: any) => {
    const {userId, password} = req.body
    try {
        const user = await User.query().select('user_id', 'password').where('user_id', userId)
        if (user.length >= 1) {
            const auth = await bcrypt.compare(password, user[0].password)
            if (auth) {
                // bcrypt가 비밀번호를 확인 후, jwt cookie를 만든다. 
                const token = await createToken(user[0].user_id)
                await res.cookie('ggeek_member', token, {httpOnly: true})
                await res.status(200).json({msg: 'log in!'})
            } else {
                res.status(401).json({msg: '비밀번호를 확인해주세요'})
            }
        // Error handling if the user is not found, or if it's bad request.
        } else if (user.length === 0) {
            res.status(401).json({msg: `"${userId}"의 유저아이디를 찾을 수 없습니다.`})
        } else {
            res.status(400).json({msg: 'bad request'})
        }
    } catch(error) {
        console.log(error)
    }
}

module.exports.logOut = async (req: Request, res: Response) => {
    try {
        console.log('log out')
        res.clearCookie("ggeek_member").status(200).json({msg: 'log out successful'})
    } catch(error) {
        console.log(error)
    }
}

const createToken = (id: string) => {
    return jwt.sign({id}, process.env.TOKEN_SEC, {
        expiresIn: "3 days"
    })
}

export {}