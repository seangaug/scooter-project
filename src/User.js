class User {
  constructor(username, password, age, loggedIn) {

    // username, password, and age are provided to the constructor as arguments. loggedIn represents whether the user is currently logged in.
    // A user is NOT logged in when they first register.

    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = loggedIn
  }
  
  login(password){
    // If password is correct, logs the User in. If not, throws incorrect password error.
    if(password === this.password) {
      this.loggedIn = true;
    } else {
      throw new Error("incorrect password")
    }
  }
  
  logout() {
    // Logs the User out.

  }
}

module.exports = User
