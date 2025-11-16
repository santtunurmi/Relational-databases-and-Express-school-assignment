import Vehicle from './Vehicle.js'
import User from './User.js'

User.hasMany(Vehicle)
Vehicle.belongsTo(User)

export {
  Vehicle,
  User
}