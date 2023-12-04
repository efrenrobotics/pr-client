import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import DestinationSearch from "../components/DestinationSearch";
import React from "react";

const DestinationPage = () => {
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
            backgroundColor: "white",
            height: "100vh",
            width: "50%",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              align="center"
              sx={{
                color: "black",
                fontSize: "5rem",
                alignItems: "center",
                pl: "2rem",
                pb: "1rem",
                letterSpacing: "0.5rem",
              }}
            >
              DESTINATION
            </Typography>
            <Button
              href="/duration"
              variant="contained"
              size="medium"
              sx={{ marginLeft: "2rem" }}
            >
              NEXT
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
          <DestinationSearch />
        </Box>
      </Box>
    </motion.div>
  );
};

export default DestinationPage;
