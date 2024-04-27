import mongoose from "mongoose";

async function connectDatabase(){
  const password = "cp456789"; 
  mongoose.connect(`mongodb+srv://cleyton:${password}@cp456789.mongodb.net/MongoDB?retryWrites=true&w=majority&appName=MongoDB`);
  
  return mongoose.connection;
}

export default connectDatabase;
