import { envSecrets } from "./constants.js";

const { backendPort } = envSecrets;

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
      signupError:'Error while '
    },
  },
});
