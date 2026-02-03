import { serverMessages } from "../constants/serverMessages.js";

const { apiResponses, authMessages, adminMessages, fileUploadMessages } =
  serverMessages;
const { adminSongMessages, adminAlbumMessages } = adminMessages;
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

export const validateSongInputs = (title, artist, duration, albumId) => {
  if (
    !title.trim() ||
    !artist.trim() ||
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

export const validateFileUpload = (file) => {
  if (!file) {
    return {
      success: apiResponses.failed,
      message: fileUploadMessages.fileUploadError,
    };
  }

  return { success: apiResponses.success };
};

export const validateAlbumInputs = (title, releaseYear, artist) => {
  if (!title.trim() || !releaseYear || !artist.trim()) {
    return {
      success: apiResponses.failed,
      message: adminAlbumMessages.albumInputFieldError,
    };
  }

  return {
    success: apiResponses.success,
    message: adminAlbumMessages.albumCreated,
  };
};


export const validIdChecker = (id) => {
  const isValidId = mongoose.isValidObjectId(id);
  if (!isValidId) {
    return {
      success: apiResponses.failed,
      message: commonResponses.invalidId,
    };
  }

  return {
    success: apiResponses.success,
    message: commonResponses.validId,
  };
};
