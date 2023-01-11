import { useEffect, useState, React } from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [authenticated, setauthenticated] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("auth");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  }
};

export default Home;
