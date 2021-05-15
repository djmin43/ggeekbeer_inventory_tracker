const { Model } = require('objection');

class Inventory extends Model {
    static get tableName() {
        return 'inventory';
    }
    static get relationMappings() {
        const Event = require('./event')
        return {
            events: {
                relation: Model.HasManyRelation,
                modelClass: Event,
                join: {
                    from: 'inventory.id',
                    to: 'event.inventory_id'
                }
            }
        }
        }
  
}

module.exports = Inventory;