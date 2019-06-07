import express, { json } from 'express';
import morgan from 'morgan';
import proyectRoute from './route/proyect';

const app = express();
app.use( morgan( 'dev' ) );
app.use( json() );

app.use( '/proyect',proyectRoute );

export default  app;
