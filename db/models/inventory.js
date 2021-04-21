const { Model } = require('objection');

class Inventory extends Model {
    static get tableName() {
        return 'inventory';
    }
}

module.exports = Inventory;