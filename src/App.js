import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to Finance Manager</h1>
        <nav>
          <Link to="/login" style={{ margin: "10px" }}>Login</Link>
          <Link to="/signup" style={{ margin: "10px" }}>Signup</Link>
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
