const jwt = require('jsonwebtoken');
const User = require('../db/model/user.js')

const SECRET = 'melon'

const verifyUser = async (req: any, res: any, next: any) => {
    const clientToken = req.cookies.jwt;

    try {
        const decoded = jwt.verify(clientToken, SECRET);
        if(decoded) {
            const userId = await decoded.id

            next();
        } else{
            res.json({ msg: 'unauthorized'})
        }
    } catch(err) {
        res.json({ msg: 'unauthorized'})
    }
};



// module.exports = checkUser;
module.exports = verifyUser;
export{}