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
};

export default helperFunctions;
