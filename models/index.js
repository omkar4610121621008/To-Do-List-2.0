const { Task } = require('./Task')
const { User } = require('./User')

Task.belongsTo(User)
User.hasMany(Task)

module.exports = {Task, User}