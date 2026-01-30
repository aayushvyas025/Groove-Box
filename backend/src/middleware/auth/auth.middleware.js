import { clerkClient } from '@clerk/express'
import { serverMessages } from '../../helper/constants/serverMessages.js';

const {statusCode, apiResponses, authMessages} = serverMessages; 

const {authorizedMessages} = authMessages;

export const protectRoute = (request, response, next) => {
 if(!request.auth.userId) {
    return response.status(statusCode.unauthorized).json({success:apiResponses.true, message:authorizedMessages.notAuthorized})
 }
 
 next(); 
} 



