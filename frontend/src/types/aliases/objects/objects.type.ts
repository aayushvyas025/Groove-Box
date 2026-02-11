export type HelperFunctions = {
    checkAuthApiKey:(key:string) => void; 
    updateAuthApiToken:(token:string | null) => void;
}