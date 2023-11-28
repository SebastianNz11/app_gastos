import { React, useState } from "react";
import {
  Container,
  Box,
  FormControl,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";

export const IngresosGastos = ({ agregarLista }) => {
  const [descrip, setDescrip] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isNaN(cantidad) ||
      cantidad.toLowerCase() !== "e" ||
      descrip.trim() !== ""
    ) {
      agregarLista(descrip, cantidad);
      setDescrip("");
      setCantidad("");
      setMostrarAlerta(false);
    } else {
      setMostrarAlerta(true);
      console.log(mostrarAlerta);
      setDescrip("");
      setCantidad("");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start", m: 5 }}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            type="text"
            value={descrip}
            onChange={(e) => setDescrip(e.target.value)}
            label="Descripción"
            required
          />
          <TextField
            sx={{ mt: 3 }}
            required
            type="number"
            label="Cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
          <Typography component="p" sx={{ ml: 1 }}>
            Para gastos ingrese negativo
          </Typography>
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Enviar
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
