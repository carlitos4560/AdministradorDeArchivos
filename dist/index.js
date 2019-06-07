"use strict";

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _pg = _interopRequireDefault(require("pg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // const connectionData = {
//     user: 'alejandro',
//     host: '',
//     database: 'evaluaciones',
//     password: 'mysecretpassword',
//     port: 5432,
//   }
//   const client = new Client(connectionData)
// // import 'index.js' from ' ./' 

app.use((0, _cors["default"])());
app.listen(process.env.PORT, function () {
  return console.log("http://localhost:".concat(process.env.PORT));
}); // import saySomething from './my-other-file.js'
// console.log(" Hola mundo");
// console.log(process.env.MY_SECRET);