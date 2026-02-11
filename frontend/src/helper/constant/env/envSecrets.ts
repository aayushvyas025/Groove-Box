const envSecrets = Object.freeze({
  authApiKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
  backendUrl:
    import.meta.env.VITE_CLIENTS_MODE === "development"
      ? import.meta.env.VITE_BACKEND_URL
      : "/",
} as const);

export default envSecrets;
