import { serverMessages } from "../constants/serverMessages.js";

const { apiResponses, authMessages } = serverMessages;
const { signupMessages } = authMessages;

export const validateAuthInputs = (id, firstName, lastName, imageUrl = "") => {
  if (!id || !firstName.trim() || !lastName.trim() || typeof imageUrl !== "string") {
    return {
      success: apiResponses.failed,
      message: signupMessages.inputFieldsError,
    };
  }
  return {
    success: apiResponses.success,
    message: signupMessages.signupSuccess,
  };
};
