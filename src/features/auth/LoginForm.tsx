
import { Auth, CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { awsConfigLoginFedarado } from "../../amplify/config";
import { useEffect, useState } from "react";

Auth.configure(awsConfigLoginFedarado);

export const LoginForm: React.FC = () => {

  const handleLogin = async () => {
    try {
      await Auth.federatedSignIn({
        provider: import.meta.env.VITE_FEDERADO_APP_OAUTH_PROVIDER as CognitoHostedUIIdentityProvider,
      });
    } catch (error) {
      console.error("Error during federated sign-in:", error);
    }
  };

  const [session, setSession] = useState<boolean>(false);

  useEffect(() => {
    async function checkSession() {
      try {
        const currentSession = await Auth.currentSession();
        setSession(true);
        console.log("Session", currentSession);
        window.location.replace('/application');
      } catch (e) {
        console.error("Error fetching session:", e);
        setSession(false);
      }
  
    }

    checkSession();
  }, [session]);

  return (
    <>
      <div className="w-full space-y-4">
      </div>
      <div>
        
  <button style={{height: '20px'}} onClick={handleLogin} type="button">Login</button>
      </div>
    </>
  );
};