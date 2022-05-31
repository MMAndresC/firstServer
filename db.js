const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/prueba-db";

const connect = async() => {
    try {
        const dbConnection = await mongoose.connect(DB_URL);
        const {host, port, name} = dbConnection.connection;
        console.log(`conectado, ${host} ${port} ${name}`);
    }
    catch (error){
        console.log('Problema al conectar a la db');
    }

}




module.exports = {
    connect
};