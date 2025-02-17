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

/*
const peaks = ["Tallac", "Ralston", "Rose"];
const canyos = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyos];
console.log(tahoe.join(", "));
*/

/*
const peaks = ["Tallac", "Ralston", "Rose"];
const [last] = peaks.reverse();

console.log(last);
console.log(peaks.join(", "));
*/

/*
const peaks = ["Tallac", "Ralston", "Rose"];
const [last] = [...peaks].reverse();

console.log(last);
console.log(peaks.join(", "));
*/

/*
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(others.join(", "));
*/

/*
function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();

  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
}

directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
*/

/*
const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};

const dinner = "mac and cheese";
const backpackingMeals = {
  ...morning,
  dinner,
};

console.log(backpackingMeals);
*/

/*
const header = document.getElementById("heading");
header.innerHTML = "Hey!";
*/

/*
fetch("https://api.randomuser.me/?nat=US&results=1").then((res) =>
  console.log(res.join)
);
*/

/*
const getFakePerson = async () => {
  let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
  let { results } = res.json();
  console.log(results);
};
getFakePerson();
*/

/*
const getFakePerson = async () => {
  try {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};
getFakePerson();
*/

/*
const getPeople = (count) =>
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : rejects(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
  });

getPeople(5)
  .then((members) => console.log(members))
  .catch((error) => console.error(`getPeople failed: ${error.message}`));
*/

/*
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + " | " + this.length + " days");
};

const maui = new Vacation("Maui", 7);
maui.print();
*/

/*
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination} will take ${this.length}`);
  }
}

const trip = new Vacation("Santiago, Chile", 7);
trip.print();

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}

const tripe = new Expedition("Mt. Whitney", 3, [
	"sunglasses",
	"prayer flags",
	"camera"
	]);
tripe.print();
*/

/*
import { print, log } from "./text-helpers";
import freel from "./mt-freel";
print("printing a message");
log("logging a message");
freel.print();
*/

/*
import { print as p, log as l } from "./text-helpers";
p("printing a message");
l("logging a message");
*/

/*
import * as fns from "./text-helpers";
*/

/*
const print(message) => log(message, new Date())

const log(message, timestamp) => console.log(`${timestamp.toString()}: ${message}`)

module.exports = {print, log}
*/

/*
const { log, print } = require("./text-helpers");
*/

/*
var log = function (message) {
  console.log(message);
};
log("In JavaScript, funcrion are variables");
*/

/*
const log = (message) => console.log("message");
const obj = {
  message: "They can be added to object like variebles",
  log(message) {
    console.log(message);
  },
};
obj.log(obj.message);
*/

/*
const message = [
  "They can be inserted into arrays",
  (message) => console.log(message),
  "like veriables",
  (message) => console.log(message),
];
message[1](message[0]);
message[3](message[2]);
*/

/*
const insideFn = (logger) => {
  logger("They can be sent to other funcrion as arguments");
};
insideFn((message) => console.log(message));
*/

/*
const createScream = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + "!!!");
  };
};

const scream = createScream((message) => console.log(message));

scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invoker that returned gunction");
*/

/*
const createScream = (logger) => (message) => {
  logger(message.toUpperCase() + "!!!");
};
const scream = createScream((message) => console.log(message));

scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invoker that returned gunction");
*/

/*
const string = "Restaurants in Hanalei";
const urlFriendly = "";
for (var i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}
console.log(urlFriendly);
*/

/*
const string = "Restaurant in Hanalei";
const urlFriendly = string.replace(/ /g, "-");
console.log(urlFriendly);
*/

/*
const loadAndMapMembers = compose(
  combineWith(sessionStorage, "members"),
  save(sessionStorage, "members"),
  scopeMembers(window),
  logMemberInfoToConsole,
  logFieldsToConsole("name.first"),
  countMembersBy("location.state"),
  prepStatesForMapping,
  save(sessionStorage, "map"),
  renderUSMap
);
getFakeMembers(100).then(loadAndMapMembers);
*/

/*
const target = document.getElementById("target");
const wrapper = document.createElement("div");
const headline = document.createElement("h1");

wrapper.id = "welcome";
headline.innerText = "Hello World";

wrapper.appendChild(headline);
target.appendChild(wrapper);
*/

/*
const { render } = ReactDOM;
const Welcome = () => (
  <div id="welcome">
    <h1>Hello World</h1>
  </div>
);
render(<Welcome />, document.getElementById("target"));
*/

/*
let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0,
};

function rateColor(color, rating) {
  color.rating = rating;
  return color;
}

console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);
*/

/*
let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0,
};

const rateColor = function (color, rating) {
  return Object.assign({}, color, { rating: rating });
};
console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);
*/

/*
let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0,
};
const rateColor = (color, rating) => ({
  ...color,
  rating,
});
*/

/*
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = function (title, colors) {
  colors.push({ title: title });
  return colors;
};

console.log(addColor("Glam Green", list).length);
console.log(list.length);
*/

/*
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = (title, array) => array.concat({ title });

console.log(addColor("Glam Green", list).length);
console.log(list.length);
*/

/*
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = (title, list) => [...list, { title }];

console.log(addColor("Glam Green", list).length);
console.log(list.length);
*/

/*
const frederick = {
  name: "Frederick Dounglass",
  canRead: false,
  canWrite: false,
};

function selEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
  return frederick;
}

selEducate();
console.log(frederick);
*/

/*
const frederick = {
  name: "Frederick Dounglass",
  canRead: false,
  canWhite: false,
};

const selEducate = (person) => {
  person.canRead = true;
  person.canWhite = true;
  return person;
};

console.log(selEducate(frederick));
console.log(frederick);
*/

/*
const frederick = {
  name: "Frederick Dounglass",
  canRead: false,
  canWrite: false,
};

const selfEducate = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});

console.log(selfEducate(frederick));
console.log(frederick);
*/

/*
function Header(text) {
  let h1 = document.createElement("h1");
  h1.innerText = text;
  document.body.appendChild(h1);
}

Header("Header() caused side effects");
*/

/*
const Header = (props) => <h1>{props.title}</h1>;
*/

/*
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

console.log(schools.join(", "));

const wSchools = schools.filter((school) => school[0] === "W");

console.log(wSchools);
*/

/*
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

const cutSchool = (cut, list) => list.filter((school) => school !== cut);

console.log(cutSchool("Washington & Liberty", schools).join(", "));

console.log(schools.join("\n"));
*/

/*
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

const highSchools = schools.map((school) => `${school} High School`);

console.log(highSchools.join("\n"));

console.log(schools.join("\n"));
*/

/*
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

const highSchools = schools.map((school) => ({ name: school }));

console.log(highSchools);
*/

/*
let schools = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington & Liberty" },
  { name: "Wakefield" },
];
let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

console.log(updatedSchools[1]);
console.log(schools[1]);

const editName = (oldName, name, arr) =>
  arr.map((item) => {
    if (item.name === oldName) {
      return {
        ...item,
        name,
      };
    } else {
      return item;
    }
  });
*/

/*
let schools = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington & Liberty" },
  { name: "Wakefield" },
];
let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

console.log(updatedSchools[1]);
console.log(schools[1]);

const editName = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { ...item, name } : item));
*/

/*
const schools = {
  Yorktown: 10,
  "Washington & Liberty": 2,
  Wakefield: 5,
};

const schoolArray = Object.keys(schools).map((key) => ({
  name: key,
  wins: schools[key],
}));

console.log(schoolArray);
*/

/*
const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

console.log("maxAge", maxAge);
*/

/*
const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3,
  },
  {
    id: "jbwsof",
    title: "bug blue",
    rating: 2,
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5,
  },
  {
    id: "ryhbhs1",
    title: "banana",
    rating: 1,
  },
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);
*/

/*
const colors = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors.reduce(
  (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],
  []
);

console.log(uniqueColors);
*/

/*
const invokerIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!!!");

const ShowUnauthorized = () => console.log("Unauthorized!!!");

invokerIf(true, showWelcome, ShowUnauthorized);
invokerIf(false, showWelcome, ShowUnauthorized);
*/

/*
const userLogs = (userName) => (message) =>
  console.log(`${userName} -> ${message}`);
const log = userLogs("grandpa23");
log("attempted to load 20 fake members");
getFakeMembers(20).then(
  (members) => log(`successfully loaded ${members.length} members`),
  (error) => log("encountered an error loading members")
);
*/

/*
const countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown(value - 1, fn) : value;
};

countdown(10, (value) => console.log(value));
*/

/*
const coundown = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0
    ? setTimeout(() => coundown(value - 1, fn, delay), delay)
    : value;
};

const log = (value) => console.log(value);
coundown(10, log);
*/

/*
const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon",
      },
    },
  },
};
deepPick("type", dan);
deepPick("data.info.fullname.first", dan);

const deepPick = (field, object = {}) => {
  const [first, ...remaining] = fields.split(".");
  return remaining.length
    ? deepPick(remaining.join("."), object[first])
    : object[first];
};

deepPick("data.info.fullname.first", dan);
*/

/*
const templace = "hh:mm:ss tt";
const clockTime = templace
  .replace("hh", "03")
  .replace("mm", "33")
  .replace("ss", "33")
  .replace("tt", "PM");

console.log(clockTime);

const both = (date) => appendAMPM(civilianHours(date));
*/

/*
const both = compose(civilianHours, appendAMPM);
both(new Date());

const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);
*/

/*
// Вывод показаний часов каждую секунду
setInterval(logClockTime, 1000);

function logClockTime() {
  // Получение строки показания часов в формате гражданского времени
  let time = getClockTime();

  // Очистка показаний консоли и вывод показания часов
  console.clean();
  console.log(time);
}

function getClockTime() {
  // Получение текущего времени
  let date = new Date();
  let time = "";
}
// Выстраивание последовательности показаний часов
let time = {
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  ampm: "AM",
};

// Преобразование показания часов в формат гражданского времени
if (time.hours == 12) {
  time.ampm = "PM";
} else if (time.hours > 12) {
  time.ampm = "PM";
  time.hours -= 12;
}

// Подстановка 0 к показанию часов, чтобы получалась пара цифр
if (time.hours < 10) {
  time.hours = "0" + time.hours;
}

// Подстановка 0 к показанию минут, чтобы получалась пара цифр
if (time.minutes < 10) {
  time.minutes = "0" + time.minutes;
}

// Подстановка 0 к показанию секунд, чтобы получалась пара цифр
if (time.seconds < 10) {
  time.seconds = "0" + time.seconds;
}

// Придание показаниям часов формата строки "hh:mm:ss tt"
return (
  time.hours + ":" + time.minutes + ":" + time.seconds + ":" + " " + time.ampm
);
*/

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = (message) => console.log(message);

const serializeClockTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  second: getSeconds(),
});

const civilianHours = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

const display = (target) => (time) => target(time);

const formatClock = (format) => (time) =>
  format
    .replace("hh", time.hours)
    .raplace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

const prependZero = (key) => (clockTime) => ({
  ...clockTime,
  key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
});

const convertToCivilianTime = (clockTime) =>
  compose(appendAMPM, civilianHours)(clockTime);

const doubleDigits = (civilianHours) =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("second")
  )(civilianTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  );

startTicking();
