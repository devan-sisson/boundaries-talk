const { Model } = require('objection')

class Team extends Model {
  static get tableName () {
    return 'teams'
  }

  static createNotFoundError({ id }) {
    return id
      ? new Error(`Cannot find team by id ${id}`)
      : new Error('Cannot find team')
  }

  static get relationMappings () {
    return {
      members: {
        relation: Model.HasManyRelation,
        modelClass: require('./user'),
        join: {
          from: 'teams.id',
          to: 'users.teamId'
        }
      }
    }
  }
}

module.exports = Team
