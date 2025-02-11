/*
var topic1 = "JAvaScript";

if (topic1) {
  var topic1 = "React";
  console.log("block", topic1);
}

console.log("global", topic1);

var topic2 = "JavaScript";

if (topic2) {
  let topic2 = "React";
  console.log("block", topic2);
}

console.log("global", topic2);

let topic3 = "JavaScript";

if (topic3) {
  let topic3 = "React";
  console.log("block", topic3);
}

console.log("global", topic3);
*/

/*
var div,
  container = document.getElementById("container");
for (var i = 0; i < 5; i++) {
  div = document.createElement("div");
  div.onclick = function () {
    alert("This is box #" + i);
  };
  container.appendChild(div);
}
*/

/*
const container = document.getElementById("container");
let div;
for (let i = 0; i < 5; i++) {
  div = document.createElement("div");
  div.onclick = function () {
    alert("This is box #: " + i);
  };
  container.appendChild(div);
}
*/

/*
function logCompliment() {
  console.log("You`re doing great!");
}

logCompliment();
*/

/*
const logCompliment = function () {
  console.log("You`re doing great!");
};
logCompliment();
*/

/*
// Invoking the function before it’s declared
hey();
// Function Declaration
function hey() {
  alert("hey!");
}
*/

/*
// Invoking the function before it's declared
hey();
// Function Expression
const hey = function() {
alert("hey!");
};
*/

/*
const logCompliment = function (firstName) {
  console.log(`You're doing great, ${firstName}`);
};
logCompliment("Molly");
*/

/*
const logCompliment = function (firstName, message) {
  console.log(`${firstName}: ${message}`);
};
logCompliment("Molly", "You're so cool");
*/

/*
const createCompliment = function (firstName, message) {
  return `${firstName}: ${message}`;
};
console.log(createCompliment("Molly", "You're so cool"));
*/

/*
function logActivity(name = "Shane McConkey", activity = "skiing") {
  console.log(`${name} loves ${activity}`);
}
*/

/*
const defaultPerson = {
  name: {
    first: "Shane",
    last: "McConkey",
  },
  favActivity: "skiing",
};

function logActivity(person = defaultPerson) {
	console.log(`${person.name.first} loves ${person.favActivity}`)
}
*/

/*
const lordify = function (firstName) {
  return `${firstName} of Canterbury`;
};

console.log(lordify("Dale"));
console.log(lordify("Gail"));

const lordify2 = (firstName) => `${firstName} of Canterbury`;
console.log(lordify2("Dale"));
console.log(lordify2("Gail"));
*/

/*
// Typical function
const lordify = function (firstName, land) {
  return `${firstName} of ${land}`;
};
// Arrow Function
const lordify2 = (firstName, land) => `${firstName} of ${land}`;

console.log(lordify("Don", "Piscataway"));
console.log(lordify("Todd", "Schenectady"));
console.log(lordify2("Don2", "Piscataway2"));
console.log(lordify2("Todd2", "Schenectady2"));
*/

/*
const lordify = (firstName, land) => {
  if (!firstName) {
    throw new Error("A firstName is required to lordify");
  }
  if (!land) {
    throw new Error("A lord must have a land");
  }
  return `${firstName} of ${land}`;
};

console.log(lordify("Kelly", "Sonoma"));

console.log(lordify("Dave"));
*/

/*
const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});
console.log(person("Brad", "Janson"));
*/

/*
const tahoe = {
  mountrains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function (delay = 1000) {
    setTimeout(() => {
      console.log(this.mountrains.join(", "));
    }, delay);
  },
};
tahoe.print();
console.log(this);
*/

/*
const add = (x = 5, y = 10) => console.log(x + y);
*/

/*
const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};

const { bread, meat } = sandwich;
console.log(bread, meat);
*/

/*
const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};

let { bread, meat } = sandwich;

bread = "garlic";
meat = "turky";

console.log(sandwich);
console.log(bread);
console.log(meat);
*/

/*
const lordify = (regularPerson) => {
  console.log(`${regularPerson.firstname} of Canterbury`);
};

const regularPerson = {
  firstname: "Bill",
  lastname: "Wilson",
};
lordify(regularPerson);
*/

/*
const lordify = ({ firstname }) => {
  console.log(`${firstname} of Canterbury`);
};

const regularPerson = {
  firstname: "Bill",
  lastname: "Wilson",
};

lordify(regularPerson);
*/

/*
const regularPerson = {
  firstname: "Bill",
  lastname: "Wilson",
  spouse: {
    firstname: "Phil",
    lastname: "Wilson",
  },
};

const lordify = ({ spouse: { firstname } }) => {
  console.log(`${firstname} of Canterbury`);
};

lordify(regularPerson);
*/

/*
const [firstAnimal] = ["Horse", "Mouse", "Cat"];
console.log(firstAnimal);
*/

/*
const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
console.log(thirdAnimal);
*/

/*
const name = "Tallac";
const elevation = 9738;
const funHike = { name, elevation };
console.log(funHike);
*/

/*
const name = "Tallac";
const elevation = 9738;
const print = function () {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};

const funHike = { name, elevation, print };
funHike.print();
*/

/*
const skier = {
  name,
  sound,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log("speeed:", mph);
  },
};
*/

const peaks = ["Tallac", "Ralston", "Rose"];
const canyos = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyos];
console.log(tahoe.join(", "));
