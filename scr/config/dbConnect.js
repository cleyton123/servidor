import mongoose from "mongoose";

async function connectDatabase(){
  mongoose.connect('mongodb+srv://cleyton:cp456789@mongodb.dm2mq6p.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB ');
  
  return mongoose.connection;
}

export default connectDatabase;
