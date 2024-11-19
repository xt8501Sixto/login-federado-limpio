import { Amplify } from "@aws-amplify/core";

export const awsConfigLoginFedarado = {
  Auth: {
    identityPoolId: import.meta.env.VITE_FEDERADO_AWS_COGNITO_POOL_IDENTITY_ID,
    region: import.meta.env.VITE_FEDERADO_AWS_REGION,
    userPoolId: import.meta.env.VITE_FEDERADO_AWS_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_FEDERADO_AWS_POOL_WEB_CLIENT_ID,
    mandatorySignIn: true,
    oauth: {
      domain: import.meta.env.VITE_FEDERADO_APP_OAUTH_DOMAIN,
      redirectSignIn: import.meta.env.VITE_FEDERADO_APP_OAUTH_REDIRECT_SIGNIN,
      redirectSignOut: import.meta.env.VITE_FEDERADO_APP_OAUTH_REDIRECT_SIGNOUT,
      responseType: import.meta.env.VITE_FEDERADO_APP_OAUTH_RESPONSE_TYPE,
      scope: ["email", "openid", "profile"],
    },
  }
};

Amplify.configure(awsConfigLoginFedarado);