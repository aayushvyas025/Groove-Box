export const serverMessages = Object.freeze({
  statusCode: {
    ok: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
    serverError: 500,
  },
  apiResponses: {
    success: true,
    failed: false,
    commonResponses: {
      serverError: "Internal Server Error",
      invalidId:"Error - invalid id provided",
      validId:"Success - valid id provided"
    },
  },
  databaseMessages: {
    setupMessage: {
      success: "Successfully setup database connection with server",
      error: "Error while setup connection between database and server",
    },
    connectionMessage: {
      success: "Successfully connected with database",
      error: "Error while connect with database",
    },
  },
  appMessages: {
    appListenMessage: "Your server is ready and up",
  },
  authMessages: {
    signupMessages: {
      inputFieldsError: "Error - Required all fields",
      signupSuccess: "User signup successfully",
      signupError: "Error while authentication",
    },
    authorizedMessages: {
      notAuthorized: "Error un-authorized - user must be logged in",
      adminAuthorization: "Error un-authorized - user is not admin ",
    },
  },
  adminMessages: {
    adminSongsMessages: {
      songInputFieldError: "Error - required all fields",
      songCreated: "Song created successfully",
      songDeleted:"Song deleted successfully"
    },
  },
  fileUploadMessages: {
    fileUploadError: "Error - required all uploads",
    cloudinaryError: "Error while uploading to cloudinary",
  },
  albumMessages: {
    albumNotFound: "Error - album not found",
  },
});
