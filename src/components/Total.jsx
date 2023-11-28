import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export const Total = ({ inicial, calculo }) => {
  let valor = calculo();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5, padding: 5 }}>
      <Typography variant="h1" sx={{ mt: 5, paddingRight: 5 }}>
        {valor}
      </Typography>
    </Box>
  );
};
