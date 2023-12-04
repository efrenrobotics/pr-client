import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./svg/Logo";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Box
        component={Link}
        to="/"
        width="30%"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Logo />
        <Typography variant="h1" align="center" fontSize="3rem">
          Oops..
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
