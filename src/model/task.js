import Sequalize from 'sequalize'; // importamos algunas funciones de sequalize
import { SEQUALIZE } from '../dataBase/dataBase.js'; // importar la conexion 
// import PROYECT from './proyect';

const TASK = SEQUALIZE.define( 'task', {
    id: {
        type: SEQUALIZE.INTEGER,
        primaryKey: true
    },
    name: {
        type: SEQUALIZE.TEXT
    },
    done:{
        type: SEQUALIZE.BOOLEAN
    },
    proyectId:{
        type: SEQUALIZE.INTEGER
    }
},
{
    timestamps: false
});
export default TASK;