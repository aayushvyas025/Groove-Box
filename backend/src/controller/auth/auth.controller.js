import { serverMessages } from "../../helper/constants/serverMessages.js";
import { validateAuthInputs } from "../../helper/utils/validations.js";

const { statusCode } = serverMessages;

export const authCallback = async (request, response) => {
  const { id, firstName, lastName, imageUrl } = request.body;
  const validationResponse = validateAuthInputs(
    id,
    firstName,
    lastName,
    imageUrl,
  );

  if (!validationResponse.success) {
    return response.status(statusCode.badRequest).json(validationResponse);
  }

  try {
  } catch (error) {
    console.log(``)
  }
};
