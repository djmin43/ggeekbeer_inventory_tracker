const { Model } = require('objection');

class Event extends Model {
    static get tableName() {
        return 'event';
    }
}

module.exports = Event;