import { Link } from "react-router-dom";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ top: 0, left: 0, right: 0, backgroundColor: "#6a1b9a", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Finance Tracking App</Link>
        </Typography>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Toolbar>
    </AppBar>
  );
};
