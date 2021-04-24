const { Model } = require('objection');

class Brew extends Model {
    static get tableName() {
        return 'brew';
    };
    static get relationMappings(){
        const User = require('./user');
    return {
        user:{
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join:{
                from: 'brew.user_id',
                to: 'user.id'
            }
        }
    }
    }
};

module.exports = Brew;

