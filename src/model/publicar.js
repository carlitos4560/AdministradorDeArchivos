import Sequalize from 'sequelize';
import { SEQUALIZE } from '../dataBase/dataBase'
import DOCUMENTO from './documento';

const PUBLICAR = SEQUALIZE.define( 'publicar', {
  id: {
    type: SEQUALIZE.INTEGER,
    primaryKey: true
  },
  nombre: {
      type: SEQUALIZE.DATE 
  },
  apellido : {
      type: SEQUALIZE.BOOLEAN
  }
},
{
timestamps: false
} );

PUBLICAR.hasMany( DOCUMENTO, { foreingKey: 'id_publicacion', sourceKey: 'id' } );
DOCUMENTO.belongsTo( PUBLICAR, { foreingKey: 'id_publicacion', sourceKey: 'id' } );

export default PUBLICAR;