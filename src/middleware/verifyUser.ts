const jwt = require('jsonwebtoken');
const User = require('../db/models/user.js')
require('dotenv').config({path: '../config/.env'})


const verifyUser = async (req: any, res: any, next: any) => {
    const clientToken = req.cookies.ggeek_member;
    try {
        if(clientToken) {
            const decoded = await jwt.verify(clientToken, process.env.TOKEN_SEC);
            const verifyUser = await User.query().select('id','user_id', 'user_name').where('user_id', decoded.id)
            res.locals.user = verifyUser[0]
            next()
        } else{
            res.status(401).json({ msg: 'unauthorized'})
        }
    } catch(err) {
        console.log(err)
        res.status(401).json({ msg: 'unauthorized'})
    }
};



// module.exports = checkUser;
module.exports = verifyUser;
export{}