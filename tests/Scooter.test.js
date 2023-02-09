const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('New instance of scooter created', () => {
    let scooter1 = new Scooter("Manchester", "Sean", 1000, 1001, 50, false)
      expect(typeof scooter1).toBe("object");
    }
  )
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
