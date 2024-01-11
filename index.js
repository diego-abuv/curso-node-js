// const { Person } = require("./person");

const dotenv = require(`dotenv`);

const ConnectToDatabase = require(`./src/database/connect`);

dotenv.config;

ConnectToDatabase();

// require(`./person.js`);
// require("./modules/path");
// require(`./modules/fs`);
// require(`./modules/http`);
// require(`./modules/express`);

// const person = new Person("Diego");
