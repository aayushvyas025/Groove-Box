import { envSecrets } from "../constants/constants.js";
import { serverMessages } from "../constants/serverMessages.js";


const { apiResponses } = serverMessages;
const { commonResponses } = apiResponses;
const {nodeEnvironment} = envSecrets; 


export const apiErrorResponse = (error) => {
  console.error(`${commonResponses.serverError} ${error.message}`);
  return {
    success: apiResponses.failed,
    message: nodeEnvironment ? commonResponses.serverError : error.message,
  };
};
