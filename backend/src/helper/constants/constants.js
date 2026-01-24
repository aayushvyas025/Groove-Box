import dotenv from "dotenv";

dotenv.config();

export const envSecrets = Object.freeze({
  mongodbUri: process.env?.MONGODB_URI,
  backendPort: process.env?.BACKEND_PORT,
  clerkPublishableKey: process.env?.CLERK_PUBLISHABLE_KEY,
  clerkSecretKey: process.env?.CLERK_SECRET_KEY,
  nodeEnvironment: process.env?.NODE_ENV,
});
