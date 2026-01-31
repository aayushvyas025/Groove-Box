import { serverMessages } from "../constants/serverMessages.js";

const { apiResponses, authMessages, adminMessages } = serverMessages;
const { adminSongMessages } = adminMessages;
const { signupMessages } = authMessages;

export const validateAuthInputs = (id, firstName, lastName, imageUrl = "") => {
  if (
    !id ||
    !firstName.trim() ||
    !lastName.trim() ||
    typeof imageUrl !== "string"
  ) {
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

export const validateSongInputs = (
  title,
  artist,
  imageUrl,
  audioUrl,
  duration,
  albumId,
) => {
  if (
    !title.trim() ||
    !artist.trim() ||
    !imageUrl.trim() ||
    !audioUrl.trim() ||
    !Number.isFinite(duration) ||
    duration <= 0 ||
    !albumId
  ) {
    return {
      success: apiResponses.failed,
      message: adminSongMessages.songInputFieldError,
    };
  }

  return {
    success: apiResponses.success,
    message: adminSongMessages.songCreated,
  };
};
