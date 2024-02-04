import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("username", user?.name || "");
    }
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>{localStorage.getItem("username")}</p>
        </div>
      ) : (
        <a>Follow on twitter <button onClick={() => loginWithRedirect()}> Log In</button></a>
      )}
    </div>
  );
};

export default Profile;
