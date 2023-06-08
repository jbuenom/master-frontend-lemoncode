// Values

export function values(obj) {
    const arrValues = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            arrValues.push(obj[key]);
        }
    }
    return arrValues;
}

// Ejemplo:
console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
); // [31, 310, "long video", "mp4"]


// Challenge

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.walk = function() {
    console.log("I'm walking");
  };
  
  var john = new Person("John");
  console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]