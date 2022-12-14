class EDevice  {
    constructor (name, power, connection) {
      this.name = name; 
      this.power = power; 
      this.connection = connection; 
    }
  }
  
  class HeatingDevice extends EDevice {
    constructor (name, power, connection, temperature) {
      super (name, power, connection);
      this.temperature = temperature;  
    }
    getPowerState = function () {
      return console.log (`This ${this.name} is ${this.connection}`)
    }
  }
  
  class CommunicationDevice extends EDevice {
    constructor (name, power, connection, network) {
      super (name, power, connection);
      this.network = network;
    }
    getPowerState = function () {
      return console.log (`This device is ${this.connection}`)
    }
  }
  
  let device_1 = new HeatingDevice ("kettle", 2.5, "activated", 100);
  let device_2 = new HeatingDevice ("heather", 2, "unactivated", 60);
  let device_3 = new CommunicationDevice ("phone", 1, "activated", "mts"); 
  let device_4 = new HeatingDevice ("toaster", 0.8, "activated"); 
  
  device_1.getPowerState(); 
  device_2.getPowerState(); 
  device_3.getPowerState(); 
  device_4.getPowerState(); 
   
  let devicesArray = [device_1, device_2, device_3, device_4]; 
  
  let totalPower = 0; 
    for (let dev of devicesArray) {
      if (dev.connection == "activated") {
        totalPower = totalPower + dev.power; 
      } 
    } 
  
  console.log (`Total power of activated devices is ${totalPower}`); 
  
  // console.log (device_1, device_2, device_3, device_4); 