class User {
  constructor(username,password,age,loggedIn){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = loggedIn
  }
  login(password){}
  logout() {}
}

module.exports = User
