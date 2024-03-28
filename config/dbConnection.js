const mongoose = require('mongoose');
const PORT=5001
const CONNECTION_STRING="mongodb+srv://Benish:iSolve123@mongo-server.etl1fjh.mongodb.net/mycontacts-backend"
const connectDb = async() =>{
   try{
   const connect = await mongoose.connect(CONNECTION_STRING);
   console.log('DataBase Connected :' , connect.connection.host,connect.connection.name);
   }catch(error){
    console.log(error,'error');
    process.exit(1);
   }
}

module.exports=connectDb;