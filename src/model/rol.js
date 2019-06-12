import Sequalize from 'sequelize';
import { SEQUALIZE } from '../dataBase/dataBase';
import SESION from './sesion';

const ROL = SEQUALIZE.define( 'rol', {
  id: {
    type: SEQUALIZE.INTEGER,
    primaryKey: true
  },
  id_tipo_rol: {
    type: SEQUALIZE.INTEGER
  },
  id_sesion: {
    type: SEQUALIZE.INTEGER
  },
  id_rol:{
    type: SEQUALIZE.INTEGER
  }
},
{
timestamps: false
} );

ROL.hasMany( SESION, { foreingKey: 'id_rol', sourceKey: 'id' } );
SESION.belongsTo( ROL, { foreingKey: 'id_rol', sourceKey: 'id' } );

export default ROL;