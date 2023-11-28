import { useEffect } from "react";
import { React, useState } from "react";
import {
  Container,
  Box,
  FormControl,
  TextField,
  Button,
  Alert,
  Grid,
} from "@mui/material";

export const MontoInicial = ({ inicial, setInicial, setDatoG, setLista }) => {
  const [valor, setValor] = useState("");
  const [habilitar, setHabilitar] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (valor > 0 && valor.toLowerCase() !== "e") {
      setInicial(valor);
      setValor("");
      setHabilitar(true);
      localStorage.setItem("h", "true");
      setMostrarAlerta(false);
    } else {
      setMostrarAlerta(true);
      console.log(mostrarAlerta);
      console.log("No se puede ingresar un valor negativo o 0");
      setValor("");
    }
  };

  useEffect(() => {
    const ini = localStorage.getItem("h");
    if (ini !== null && inicial) {
      setHabilitar(ini === "true");
    }
  }, [inicial]);

  const handleReset = () => {
    setHabilitar(false);
    setLista([]);
    setInicial(0);
    setMostrarAlerta(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5, ml: 5 }}>
        <Grid container spacing={2}>
          <Grid item sx={12} sm={12} lg={6} xl={6}>
            <FormControl component="form" onSubmit={handleOnsubmit}>
              <TextField
                required
                type="number"
                label="Ingrese valor inicial"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                disabled={habilitar}
              />
            </FormControl>
          </Grid>
          <Grid item sx={12} sm={12} lg={6} xl={6}>
            <Button
              type="submit"
              disabled={habilitar}
              variant="contained"
              sx={{ ml: 1 }}
              onClick={handleOnsubmit}
            >
              Enviar
            </Button>
            <Button onClick={handleReset} variant="contained" sx={{ ml: 1 }}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>
      {mostrarAlerta === true ? (
        <Alert severity="error" sx={{ mt: 3, mr: 5 }}>
          No se permiten negativos, vacios o cero
        </Alert>
      ) : null}
    </>
  );
};
