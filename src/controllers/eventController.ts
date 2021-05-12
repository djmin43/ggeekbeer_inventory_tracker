const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const User = require('../db/models/user.js')


module.exports.getEvent = async (req: any, res: any) => {
    try {
        const event = await Event.query();
        res.status(200).json(event)
    } catch(error) {
        console.log(error)
    }
};

export {};

