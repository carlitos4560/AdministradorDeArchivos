"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequalize = _interopRequireDefault(require("sequalize"));

var _dataBase = require("../dataBase/dataBase.js");

var _task = _interopRequireDefault(require("./task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// importamos algunas funciones de sequalize
// importar la conexion 
var PROYECT = _dataBase.SEQUALIZE.define('proyect', {
  id: {
    type: _dataBase.SEQUALIZE.INTEGER,
    primaryKey: true
  },
  name: {
    type: _dataBase.SEQUALIZE.TEXT
  },
  priory: {
    type: _dataBase.SEQUALIZE.INTEGER
  },
  description: {
    type: _dataBase.SEQUALIZE.TEXT
  },
  deliveryDate: {
    type: _dataBase.SEQUALIZE.DATE
  }
}, {
  timestamps: false
});

PROYECT.hasMany(_task["default"], {
  foreingKey: 'proyectId',
  sourceKey: 'id'
});

_task["default"].belongsTo(PROYECT, {
  foreingKey: 'proyectId',
  sourceKey: 'id'
});

var _default = PROYECT;
exports["default"] = _default;