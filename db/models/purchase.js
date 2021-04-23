const { Model } = require('objection');

class Purchase extends Model {
    static get tableName() {
        return 'purchase';
    }
};

module.exports = Purchase;