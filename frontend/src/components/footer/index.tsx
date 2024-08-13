import wave from "../../assets/react.svg";
import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        position: "static",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 10, // Ensure it's above other content if necessary
      }}
    >
      <Box
        component="img"
        src={wave}
        alt="wave"
        sx={{ width: "100%", display: "block", height:"195px", objectFit: "cover", }}
      />
    </Box>
  );
};
