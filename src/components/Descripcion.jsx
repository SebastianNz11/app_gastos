import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

export const Descripcion = ({ lista, setLista }) => {
  const handleDelete = (nombre) => {
    let permancen = lista.filter((n) => n.nombre !== nombre);
    setLista(permancen);
  };

  return (
    <Box sx={{ ml: 2 }}>
      {lista.map((item, index) => {
        return (
          <Paper
            key={index}
            sx={{
              padding: 4,
              mt: 4,
              display: "flex",
              justifyContent: "space-evenly",
            }}
            elevation={5}
          >
            <Typography component="p">
              {item.nombre} {""} {item.numero}{" "}
            </Typography>
            <Button
              onClick={() => handleDelete(item.nombre)}
              variant="contained"
            >
              Borrar
            </Button>
          </Paper>
        );
      })}
    </Box>
  );
};
