import Sequalize from 'sequelize';
import { SEQUALIZE } from '../dataBase/dataBase'
import ROL from './rol';

const TIPO_ROL = SEQUALIZE.define( 'tipo_rol', {
  id: {
    type: SEQUALIZE.INTEGER,
    primaryKey: true
  },
  nombre_rol: {
      type: SEQUALIZE.TEXT 
  }
},
{
timestamps: false
} );

TIPO_ROL.hasMany( ROL, { foreingKey: 'id_tipo_rol', sourceKey: 'id' } );
ROL.belongsTo( TIPO_ROL, { foreingKey: 'id_tipo_rol', sourceKey: 'id' } );

export default TIPO_ROL;