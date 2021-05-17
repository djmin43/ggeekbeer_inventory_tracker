const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const User = require('../db/models/user.js')
const bcrypt = require('bcryptjs')

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
        const auth = await bcrypt.compare(password, user[0].password)
        res.json(auth)
        // bcrypt.compare();
    } catch(error) {
        console.log(error)
    }
    
}

export {}