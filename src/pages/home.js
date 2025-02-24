// import React from "react";
// import { Container, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <Container sx={{ textAlign: "center", mt: 5 }}>
//       <Typography variant="h3">Welcome to Finance Manager</Typography>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         Track your expenses and manage your finances efficiently.
//       </Typography>
//       <Button variant="contained" color="primary" sx={{ mx: 2 }} onClick={() => navigate("/login")}>
//         Login
//       </Button>
//       <Button variant="outlined" color="primary" onClick={() => navigate("/signup")}>
//         Signup
//       </Button>
//     </Container>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom"; // Ensure React Router is installed

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      {/* Unique Heading */}
      <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
        Welcome to <span className="text-yellow-300">Finance Manager</span>
      </h1>

      {/* Button Container */}
      <div className="mt-8 flex space-x-6">
        <Link to="/login">
          <button className="px-6 py-3 text-lg font-semibold rounded-full bg-white text-blue-600 shadow-md transition duration-300 hover:bg-blue-700 hover:text-white hover:scale-105">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="px-6 py-3 text-lg font-semibold rounded-full bg-yellow-300 text-blue-800 shadow-md transition duration-300 hover:bg-yellow-400 hover:scale-105">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
