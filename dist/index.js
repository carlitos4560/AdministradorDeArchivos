"use strict";

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _pg = _interopRequireDefault(require("pg"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// const app = express();
// const connectionData = {
//     user: 'alejandro',
//     host: '',
//     database: 'evaluaciones',
//     password: 'mysecretpassword',
//     port: 5432,
//   }
//   const client = new Client(connectionData)
// // import 'index.js' from ' ./' 
function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _app["default"].listen(process.env.PORT, function () {
              return console.log("http://localhost:".concat(process.env.PORT));
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main(); // import saySomething from './my-other-file.js'
// console.log(" Hola mundo");
// console.log(process.env.MY_SECRET);