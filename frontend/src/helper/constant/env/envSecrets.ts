const envSecrets = Object.freeze({
  authApiKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
} as const); 

export default envSecrets; 
