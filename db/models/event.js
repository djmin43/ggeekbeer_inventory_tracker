const { Model } = require('objection');

class Event extends Model {
    static get tableName() {
        return 'event';
    }

    static get relationMappings() {
        const User = require('./user')
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'event.user_id',
                    to: 'user.id'
                }
            }
        }
        }

        

    // 하나의 이벤트는 하나의 유저에게만 연결되어있다. One to one. brew event 하나에 여러명의 유저가 없다. 
    // 하나의 이벤트(양조건 구매건), 하나의 재료에만 연결되어있다. One to One
    // 이벤트는 무조건 one to one이다. 
}

module.exports = Event;