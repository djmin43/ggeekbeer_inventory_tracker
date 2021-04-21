const { Model } = require('objection');

class Action extends Model {
    static get tableName() {
        return 'event';
    }
}

module.exports = Action;