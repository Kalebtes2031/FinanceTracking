import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export const Auth = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6a1b9a, #8e24aa, #ab47bc)",
        color: "#fff",
      }}
    >
      <SignedOut>
        <Box textAlign="center">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: "Cursive",
              fontWeight: "bold",
              color: "#f3e5f5",
              marginBottom: "20px",
            }}
          >
            Welcome Back!
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: "Arial, sans-serif",
              color: "#e1bee7",
              marginBottom: "40px",
            }}
          >
            Sign in or Sign up to continue
          </Typography>

          <SignUpButton mode="modal">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8e24aa",
                color: "#fff",
                borderRadius: "20px",
                padding: "10px 20px",
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: "#ab47bc",
                  boxShadow: "0px 0px 20px 5px rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              Sign Up
            </Button>
          </SignUpButton>

          <SignInButton mode="modal">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6a1b9a",
                color: "#fff",
                borderRadius: "20px",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#7b1fa2",
                  boxShadow: "0px 0px 20px 5px rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              Sign In
            </Button>
          </SignInButton>
        </Box>
      </SignedOut>

      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  );
};
