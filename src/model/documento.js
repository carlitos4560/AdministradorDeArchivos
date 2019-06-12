import Sequalize from 'sequelize';
import { SEQUALIZE } from '../dataBase/dataBase'

const DOCUMENTO = SEQUALIZE.define( 'documento', {
  id: {
    type: SEQUALIZE.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: SEQUALIZE.TEXT
  },
  ruta: {
    type: SEQUALIZE.TEXT
  },
  id_usuario: {
    type: SEQUALIZE.INTEGER
  },
  id_publicacion: {
    type: SEQUALIZE.INTEGER
  }
},
{
timestamps: false
} );

export default DOCUMENTO;