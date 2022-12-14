let person = {
    name : "John", 
    age : 29, 
    city: "Vancouver", 
    profession : "teacher"}

function getInfo (person) {
  for (let key in person) {
    console.log (key); 
  }
}

getInfo (person); 