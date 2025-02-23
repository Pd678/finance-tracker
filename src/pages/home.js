import React from "react";
import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3">Welcome to Finance Manager</Typography>
      <Typography variant="h6" sx={{ my: 2 }}>
        Track your expenses and manage your finances efficiently.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mx: 2 }} onClick={() => navigate("/login")}>
        Login
      </Button>
      <Button variant="outlined" color="primary" onClick={() => navigate("/signup")}>
        Signup
      </Button>
    </Container>
  );
};

export default Home;
