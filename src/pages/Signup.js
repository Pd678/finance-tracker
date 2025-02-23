import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/dashboard");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Signup Page</h1>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
