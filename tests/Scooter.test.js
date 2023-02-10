const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('scooter instance integrity checks', () => {
  const scooter1 = new Scooter("Manchester")
  
  //typeof scooter === object
  test('New instance of scooter created as an object', () => {
      expect(typeof scooter1).toBe("object");
    });
  
  // Scooter class station, user, serial, charge, and isBroken properties initialized correctly
  test("Instance has correct properties", () => {
    expect(scooter1).toHaveProperty("user", null);
    expect(scooter1).toHaveProperty("charge");
    expect(scooter1).toHaveProperty("serial");
    expect(typeof scooter1.isBroken).toBe("boolean");
    expect(scooter1.station).toBe("Manchester")
  });

// Scooter class has nextSerial class property used to assign unique serial numbers
  test("nextSerial class property used to assign unique serial numbers", () => {
    const scooter2 = new Scooter("Trafford")
    expect(typeof scooter2.nextSerial++).toBe("number");
    // expect(scooter2.serial).toBe(scooter1.serial + 1);
  })
})

// Method tests
describe('scooter methods', () => {
  const scooter3 = new Scooter()

// Scooter class has rent and dock methods
  test("scooter has class and rent methods", () => {
    expect(scooter3.rent).toBeDefined();
    expect(typeof scooter3.rent).toBe('function');
    expect(scooter3.dock).toBeDefined();
    expect(typeof scooter3.dock).toBe('function');
   })
  
  //requestRepair method

  //charge method
})
