function EDevice (name, power, connection) {
  this.name = name; 
  this.power = power; 
  this.connection = connection; 
}

EDevice.prototype.getPowerState = function () {
  return console.log (`This electrical device is ${this.connection}`)
};

function HeatingDevice (name, power, connection, temperature) {
  this.temperature = temperature;
  this.name = name; 
  this.power = power; 
  this.connection = connection; 
}

function CommunicationDevice (name, power, connection, network) {
  this.network = network;
  this.name = name; 
  this.power = power; 
  this.connection = connection; 
}

HeatingDevice.prototype = new EDevice (); 
CommunicationDevice.prototype = new EDevice (); 

HeatingDevice.prototype.getPowerState = function () {
  return console.log (`This ${this.name} is ${this.connection}`)
};

CommunicationDevice.prototype.getPowerState = function () {
  return console.log (`This device is ${this.connection}`)
};


let device_1 = new HeatingDevice ("kettle", 2.5, "activated", 100);
let device_2 = new HeatingDevice ("heather", 2, "unactivated", 60);
let device_3 = new CommunicationDevice ("phone", 1, "activated", "mts"); 
let device_4 = new EDevice ("toaster", 0.8, "activated"); 

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