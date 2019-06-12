import Sequalize from 'sequelize';
import { SEQUALIZE } from '../dataBase/dataBase'
import SESION from './sesion';
import DOCUMENTO from './documento';

const USUARIO = SEQUALIZE.define( 'usuario', {
  id: {
    type: SEQUALIZE.INTEGER,
    primaryKey: true
  },
  nombre: {
      type: SEQUALIZE.TEXT 
  },
  apellido : {
      type: SEQUALIZE.INTEGER
  },
  correo: {
      type: SEQUALIZE.TEXT
  },
  direccion : {
      type: SEQUALIZE.DATE
  },
  telefono: {
      type: SEQUALIZE.TEXT
  },
  cargo: {
      type: SEQUALIZE.TEXT
  },
  activo: {
      type: SEQUALIZE.BOOLEAN
  }
},
{
timestamps: false
} );

USUARIO.hasMany( SESION, { foreingKey: 'id_usuario', sourceKey: 'id' } );
SESION.belongsTo( USUARIO, { foreingKey: 'id_usuario', sourceKey: 'id' } );

USUARIO.hasMany( DOCUMENTO, { foreingKey: 'id_usuario', sourceKey: 'id' } );
DOCUMENTO.belongsTo( USUARIO, { foreingKey: 'id_usuario', sourceKey: 'id' } );

export default USUARIO;