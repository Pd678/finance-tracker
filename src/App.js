// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import './App.css';


// function App() {
//   return (
//     <Router>
//       <div style={{ textAlign: "center", padding: "50px" }}>
//         <h1>Welcome to Finance Manager</h1>
//         <nav>
//           <Link to="/login" style={{ margin: "10px" }}>Login</Link>
//           <Link to="/signup" style={{ margin: "10px" }}>Signup</Link>
//         </nav>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 className="heading">Welcome to Personal Finance Tracker </h1>
        <nav className="nav-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Signup</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
