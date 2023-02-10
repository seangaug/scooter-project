const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('scooter instance integrity checks', () => {
  let scooter1 = new Scooter("Manchester")
  
  //typeof scooter === object
  test('New instance of scooter created as an object', () => {
      expect(typeof scooter1).toBe("object");
    });
  
  test("Instance has correct properties", () => {
    expect(scooter1).toHaveProperty("user", null);
    expect(scooter1).toHaveProperty("charge");
    expect(scooter1).toHaveProperty("serial");
    expect(typeof scooter1.isBroken).toBe("boolean");
    expect(scooter1.station).toBe("Manchester")
  });
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
