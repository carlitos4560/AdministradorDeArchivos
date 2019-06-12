"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequalize = _interopRequireDefault(require("sequalize"));

var _dataBase = require("../dataBase/dataBase.js");

var _proyect = _interopRequireDefault(require("./proyect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// importamos algunas funciones de sequalize
// importar la conexion 
var TASK = _dataBase.SEQUALIZE.define('task', {
  id: {
    type: _dataBase.SEQUALIZE.INTEGER,
    primaryKey: true
  },
  name: {
    type: _dataBase.SEQUALIZE.TEXT
  },
  done: {
    type: _dataBase.SEQUALIZE.BOOLEAN
  },
  proyectId: {
    type: _dataBase.SEQUALIZE.INTEGER
  }
}, {
  timestamps: false
});

var _default = TASK;
exports["default"] = _default;