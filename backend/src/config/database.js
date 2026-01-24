import mongoose from "mongoose"; 
import { envSecrets } from "../helper/constants/constants.js";
import { serverMessages } from "../helper/constants/serverMessages.js";
const {mongodbUri} = envSecrets;
const {databaseMessages} =serverMessages; 
const {setupMessage} = databaseMessages;

export const connectDatabase = async () => {
    try {
    const connectionToDB =  await mongoose.connect(mongodbUri); 
    console.log(`${setupMessage.success}: ${connectionToDB.connection.host}`)    
    } catch (error) {
        console.error(`${setupMessage.error}: ${error.message}`); 
      process.exit(1); 
    }
}

