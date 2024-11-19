import { Auth } from "@aws-amplify/auth";
import React, { useEffect } from "react";
import { awsConfigLoginFedarado } from "../../amplify/config";

Auth.configure(awsConfigLoginFedarado);

export const Application = () => {

  const [session, setSession] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    async function CheckSession() {
      try {
        await Auth.currentSession();
        setSession(true);
        setLoading(false);
      } catch (e) {
        setSession(false);
        setLoading(false);
      }
    }

    CheckSession();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        session ? (
          <div>SESSION DE USARIO</div>
        ) : (
          <div>No session</div>
        )
      )}
    </>
  );
};