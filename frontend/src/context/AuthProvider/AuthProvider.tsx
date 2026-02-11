import { AuthLoader } from "@/components/loading components";
import { useAuthProvider } from "@/hooks/useAuthProvider/useAuthProvider";
import type { AuthProviderProps } from "@/types/interface/context/contextInterface";


function AuthProvider({ children }: AuthProviderProps) {
  const { userId, loading } = useAuthProvider();

  if (loading) {
    return <AuthLoader size="8" color="emerald" thickness="500" />;
  }

  return <>{children}</>;
}

export default AuthProvider;
