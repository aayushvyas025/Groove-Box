import { API } from "@/config";
import { applicationContent } from "@/helper/constant";
import type { HelperFunctions } from "@/types/aliases/objects/objects.type";


const { messages } = applicationContent;
const { clerkMessages } = messages;
const { error } = clerkMessages;

const helperFunctions: HelperFunctions = {
  checkAuthApiKey: (key: string) => {
    if (!key) {
      throw new Error(error);
    }
  },
  updateAuthApiToken:(token:string| null) => {
   if(token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`
   }else {
    delete API.defaults.headers.common['Authorization']
   }
  }
};

export default helperFunctions;
