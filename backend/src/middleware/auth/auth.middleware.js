import { clerkClient} from "@clerk/express";
import { serverMessages } from "../../helper/constants/serverMessages.js";
import { envSecrets } from "../../helper/constants/constants.js";

const { statusCode, apiResponses, authMessages } = serverMessages;
const { adminEmail } = envSecrets;
const { authorizedMessages, adminAuthorization } = authMessages;

export const protectRoute = async (request, response, next) => {
  if (!request.auth.userId) {
    return response.status(statusCode.unauthorized).json({
      success: apiResponses.true,
      message: authorizedMessages.notAuthorized,
    });
  }

  next();
};

export const requireAdmin = async (request, response, next) => {
  try {
    const currentUser = await clerkClient?.users?.getUser(request.auth.userId);
    const isAdmin = adminEmail === currentUser.primaryEmailAddress.emailAddress;

    if (!isAdmin) {
      return response
        .status(statusCode.forbidden)
        .json({ success: apiResponses.failed, message: adminAuthorization });
    }

    next();
  } catch (error) {
    next(error);
  }
};
