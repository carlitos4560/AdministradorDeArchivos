import Sequalize from 'sequelize';
import { SEQUALIZE } from '../dataBase/dataBase'

const SESION = SEQUALIZE.define( 'sesion', {
  id: {
    type: SEQUALIZE.INTEGER,
    primaryKey: true
  },
  contrasenia: {
      type: SEQUALIZE.TEXT 
  },
  token : {
      type: SEQUALIZE.INTEGER
  },
  id_usuario: {
      type: SEQUALIZE.INTEGER
  }
},
{
timestamps: false
} );

export default SESION;