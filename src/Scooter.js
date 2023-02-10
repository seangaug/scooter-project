class Scooter{

  static nextSerial = 0;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent()  {
    if(this.charge < 21) {
      throw new Error("scooter needs to charge");
    } else if (this.isBroken) {
      throw new Error("scooter needs repair")
    }
  }

  dock(station) {

  }

  recharge() {

  }

  requestRepair() {

  }
  
}

module.exports = Scooter
