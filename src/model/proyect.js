import Sequalize from 'sequalize'; // importamos algunas funciones de sequalize
import { SEQUALIZE } from '../dataBase/dataBase.js'; // importar la conexion 
import TASK from './task';

const PROYECT = SEQUALIZE.define( 'proyect', {
    id: {
        type: SEQUALIZE.INTEGER,
        primaryKey: true
    },
    name: {
        type: SEQUALIZE.TEXT 
    },
    priory : {
        type: SEQUALIZE.INTEGER
    },
    description: {
        type: SEQUALIZE.TEXT
    },
    deliveryDate : {
        type: SEQUALIZE.DATE
    }
},
{
    timestamps: false
} );

PROYECT.hasMany( TASK, { foreingKey: 'proyectId', sourceKey: 'id' } );
TASK.belongsTo( PROYECT, { foreingKey: 'proyectId', sourceKey: 'id' } );

export default PROYECT;