const { Model } = require('objection');

class Event extends Model {
    static get tableName() {
        return 'event';
    }

    static get relationMappings() {
        const Inventory = require('./inventory')
        const User = require('./user')
        return {
            inventory: {
                relation: Model.BelongsToOneRelation,
                modelClass: Inventory,
                join: {
                    from: 'event.inventory_id',
                    to: 'inventory.id'
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'event.user_id',
                    to: 'user.id'
                }
            },

            
        }
  
    }

}

module.exports = Event;