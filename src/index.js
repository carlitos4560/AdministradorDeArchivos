import 'dotenv/config';
import cors from 'cors';
import Client  from 'pg';
import app from './app';
// const app = express();

// const connectionData = {
//     user: 'alejandro',
//     host: '',
//     database: 'evaluaciones',
//     password: 'mysecretpassword',
//     port: 5432,
//   }
//   const client = new Client(connectionData)
// // import 'index.js' from ' ./' 
async function main(){
  await app.listen( process.env.PORT, () => 
    console.log( `http://localhost:${process.env.PORT}` ),
  );
}

main();



// import saySomething from './my-other-file.js'
// console.log(" Hola mundo");
// console.log(process.env.MY_SECRET);
 