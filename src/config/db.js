const {Pool} = require("pg");
const dotenv = require("dotenv");
const fs = require('fs');
dotenv.config();
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl:{
        rejectUnauthorized: true,
        ca:fs.readFileSync('src/certs/ca.crt').toString()
    }

});
// verificar la conexion a la base de datos
pool.connect((err,client,release)=>{
    if(err){
        console.log("error de conexion",err.stack)
    } else{
        console.log("conexion exitosa")
        release()
    }
})
module.exports=pool;