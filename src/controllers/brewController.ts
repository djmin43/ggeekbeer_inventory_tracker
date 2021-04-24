const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


module.exports.brew_get = (req: any, res: any) => {
    res.json({msg:'brew get page'});
}

export {};
