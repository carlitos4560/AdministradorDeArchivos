"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEQUALIZE = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SEQUALIZE = new _sequelize["default"]('admindocuments', // nombre de base de datos 
'carlos', // nombre de usuario
'roberto', // contraseña de base de datos 
{
  host: 'localhost',
  // donde se encuentra la base de datos
  dialect: 'postgres',
  // a que base de datos se va a conectar 
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.SEQUALIZE = SEQUALIZE;