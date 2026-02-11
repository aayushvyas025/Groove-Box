import { applicationContent } from "@/helper/constant";
import { helperFunctions } from "@/helper/utils";
import type { UseAuthProvider } from "@/types/interface/hooks/hooksInterface";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const { messages } = applicationContent;
const { hooks } = messages;
const { hooksError } = hooks;
const { updateAuthApiToken } = helperFunctions;

export function useAuthProvider(): UseAuthProvider {
  const { getToken, userId } = useAuth();
  const [loading, setLoading] = useState(true);

  async function initAuth(): Promise<void> {
    try {
      const token = await getToken();
      updateAuthApiToken(token);
    } catch (error: any) {
      updateAuthApiToken(null);

      console.error(`${hooksError.authProviderError} : ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    initAuth();
  }, [getToken]);

  return { userId, loading };
}
