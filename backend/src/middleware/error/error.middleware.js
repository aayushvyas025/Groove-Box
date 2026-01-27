import { serverMessages } from "../../helper/constants/serverMessages.js";
import { apiErrorResponse } from "../../helper/utils/helpers.js";



const { statusCode } = serverMessages; 

export const serverErrorMiddleware = (app) => {
  app.use((error, request, response, next) => {
    const apiErrorRes = apiErrorResponse(error);
    response.status(statusCode.serverError).json(apiErrorRes);
  });
};