import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import data from "../../assets/data.svg";

export const Auth = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center content horizontally
        backgroundColor: "#f2efed",
        padding: "20px", // Optional padding for overall content
      }}
    >
      <SignedOut>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Distribute space between the two boxes
            width: "100%", // Take up full width
            maxWidth: "1200px", // Constrain maximum width for better layout
            mx: { xs: "20px", md: "50px" }, // Center content with responsive margin
            flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              flex: 1,
              padding: { xs: "10px", md: "20px" }, // Responsive padding
              mr: { md: 2 }, // Right margin only on medium and up
              mb: { xs: 2, md: 0 }, // Bottom margin on small screens
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "Cursive",
                fontWeight: "bold",
                color: "#8e24aa",
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
                color: "#7b1fa2",
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
                  padding: { xs: "8px 16px", md: "10px 20px" }, // Responsive padding
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
                  padding: { xs: "8px 16px", md: "10px 20px" }, // Responsive padding
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
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ml: { md: 5 }, // Left margin only on medium and up
              mt: { xs: 2, md: 0 }, // Top margin on small screens
            }}
          >
            <img
              src={data}
              alt="Auth Illustration"
              style={{ maxWidth: "100%", height: "440px" }} // Make image responsive
            />
          </Box>
        </Box>
      </SignedOut>

      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </Box>
  );
};
