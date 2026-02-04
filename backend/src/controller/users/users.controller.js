import { serverMessages } from "../../helper/constants/serverMessages.js";
import { User } from "../../model/user/user.model.js";

const { usersMessages, statusCode, apiResponses } = serverMessages;
const { fetchAllUser, fetchAllUserError } = usersMessages;

export const fetchAllUsers = async (request, response, next) => {
  const currentUserId = request.auth.userId;
  try {
    const users = await User.find({ clerkId: { $ne: currentUserId } });
    response
      .status(statusCode.ok)
      .json({ success: apiResponses.success, message: fetchAllUser, users });
  } catch (error) {
    console.error(`${fetchAllUserError} : ${error.message}`);
    next(error);
  }
};
