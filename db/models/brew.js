const { Model } = require('objection');

class Brew extends Model {
    static get tableName() {
        return 'brew';
    }
}

module.exports = Brew;