import mongoose from "mongoose";



async function ConnectDB() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/e_commerce');
        console.log("Mongoose is connected");
    }
    catch(error){
        console.error(error);
    }
  }

  export default ConnectDB; 