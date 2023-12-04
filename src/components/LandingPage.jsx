import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Logo from "./svg/Logo";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "black",
            height: "100vh",
            width: "50%",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              align="center"
              sx={{
                color: "white",
                fontSize: "5rem",
                alignItems: "center",
                pl: "2rem",
                pb: "1rem",
                letterSpacing: "0.5rem",
              }}
            >
              PACKRIGHT
            </Typography>
            <Button
              href="/destination"
              variant="contained"
              size="medium"
              sx={{ marginLeft: "2rem" }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#38B6FF",
            height: "100vh",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo />
        </Box>
      </Box>
    </motion.div>
  );
};

export default LandingPage;
