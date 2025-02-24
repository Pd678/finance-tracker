// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Auth.css";


// // const Signup = () => {
// //   const navigate = useNavigate();

// //   const handleSignup = (e) => {
// //     e.preventDefault();
    
// //     // Simulate signup logic (You can add API calls here)
// //     console.log("User Signed Up!");

// //     // Redirect to the Dashboard
// //     navigate("/dashboard");
// //   };

// //   return (
// //     <div>
// //       <h2>Signup</h2>
// //       <form onSubmit={handleSignup}>
// //         <input type="text" placeholder="Username" required /><br></br> <br></br>
// //         <input type="password" placeholder="Password" required />
// //         <button type="submit">Signup</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Signup;
// import React, { useState } from "react";
// import "./Auth.css";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = (e) => {
//     e.preventDefault();
//     console.log("Signup Clicked:", { username, password });
//     alert("Signup button clicked! Implement authentication here.");
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>📝 Signup</h2>
//         <form onSubmit={handleSignup} className="input-group">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className="auth-button">Signup</button>
//         </form>
//         <p className="auth-text">
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Simulate successful signup process
    console.log("Signup Clicked:", { username, password });
    alert("Signup successful! Redirecting to Dashboard...");

    // Redirect to the Dashboard page
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>📝 Signup</h2>
        <form onSubmit={handleSignup} className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-button">Signup</button>
        </form>
        <p className="auth-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
