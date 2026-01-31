import { serverMessages } from "../../helper/constants/serverMessages.js";
import { validateAuthInputs } from "../../helper/utils/validations.js";
import { User } from "../../model/user/user.model.js";

const { statusCode} = serverMessages;

export const authCallback = async (request, response, next) => {
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
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      const signupUser = await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });

      response
        .status(statusCode.ok)
        .json({ ...validationResponse, signupUser });
    }
  } catch (error) {
    next(error);
   
  }
};
