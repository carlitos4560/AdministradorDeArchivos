import Sequalize from 'sequelize';

export const SEQUALIZE = new Sequalize(
    'admindocuments', // nombre de base de datos 
    'carlos', // nombre de usuario
    'roberto', // contraseña de base de datos 
    {
        host: 'localhost', // donde se encuentra la base de datos
        dialect: 'postgres', // a que base de datos se va a conectar 
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);