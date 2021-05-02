const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


// Get BrewInfo DB
module.exports.brewGet = async (req: any, res: any) => {
    try {
        const brew = await Brew.query()
        res.status(200).json(brew)
    } catch(error) {
        console.log(error)
    }
};


// Post a new Brew
module.exports.brewPost = async (req: any, res: any) => {

    try {
        // const {brew_type, brew_date, brew_name, brew_description, user_id} = req.body
        // const newBrew = await Brew.query().insert({
        //     brew_type, brew_date, brew_name, brew_description, user_id
        // });
        await res.status(200).json('new Brew recorded!');
    } catch(error) {
        console.log(error)
    }
};



// I NEED UUID!!



export {};


// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);
