const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(stations, registeredUsers){
    this.stations = {}
    this.registeredUsers = {}
  }
  registerUser(username, password, age){}
  loginUser(username, password){}
  logoutUser(username){}
  createScooter(station){}
  dockScooter(scooter,station){}
  rentScooter(scooter, user){}
  print()
}

module.exports = ScooterApp
