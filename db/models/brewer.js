const { Model } = require('objection');

class Brewer extends Model {
    static get tableName() {
        return 'brewer';
    }
}

module.exports = Brewer;