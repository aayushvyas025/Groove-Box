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
      invalidId: "Error - invalid id provided",
      validId: "Success - valid id provided",
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
    adminResponseMessages: {
      checkAdmin: "Successfully check admin",
      checkAdminError: "Error - while check admin",
    },
    adminSongsMessages: {
      songInputFieldError: "Error - required all fields",
      songCreated: "Song created successfully",
      songCreationError: "Error - while creating song",
      songDeleted: "Song deleted successfully",
      songDeletionError: "Error - while deleting song",
    },
    adminAlbumMessages: {
      albumInputFieldError: "Error - required all fields",
      albumCreated: "Album created successfully",
      albumCreationError: "Error - while creating album",
      albumDeleted: "Album created successfully",
      albumDeletionError: "Error - while deleting album",
    },
  },
  fileUploadMessages: {
    fileUploadError: "Error - required all uploads",
    cloudinaryError: "Error while uploading to cloudinary",
  },
  albumMessages: {
    albumNotFound: "Error - album not found",
  },
  songMessages: {
    fetchAllSongs: "Successfully fetch all songs",
    errorFetchAllSongs: "Error - while fetching all songs",
    trendingSongs: "Successfully fetch trending songs",
    trendingSongsError: "Error - while fetching trending songs",
    userPreferenceSongs: "Successfully fetch user preference songs",
    userPreferenceSongsError: "Error - while fetch user preference songs",
    featuredSongs: "Successfully fetch featured songs",
    featuredSongsError: "Error - while fetch featured songs",
  },
});
