const { Person } = require("./person");

require(`./person.js`);
require("./modules/path");
require(`./modules/fs`);

const person = new Person("Diego");

console.log(person.sayMyName());
