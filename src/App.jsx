import { React, useState, useEffect } from "react";
import { MontoInicial } from "./components/MontoInicial";
import { IngresosGastos } from "./components/IngresosGastos";
import { Total } from "./components/Total";
import { Descripcion } from "./components/Descripcion";
import { Grafica } from "./components/Grafica";
import { Container, Grid } from "@mui/material";

export const App = () => {
  const [inicial, setInicial] = useState(0);
  const [lista, setLista] = useState([]);

  const agregarLista = (descrip, cantidad) => {
    setLista((lista) => {
      if (Array.isArray(lista)) {
        return [...lista, { nombre: descrip, numero: parseFloat(cantidad) }];
      } else {
        return [{ nombre: descrip, numero: parseFloat(cantidad) }];
      }
    });
  };

  useEffect(() => {
    let data = localStorage.getItem("IngresosGastos");
    if (data) {
      setLista(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("IngresosGastos", JSON.stringify(lista));
  }, [lista]);

  useEffect(() => {
    let dato = localStorage.getItem("MontoInicial");
    if (dato) {
      setInicial(JSON.parse(dato));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("MontoInicial", JSON.stringify(inicial));
  });

  const calculo = () => {
    let totalLista = lista.reduce((acumulator, lista) => {
      return acumulator + lista.numero;
    }, 0);
    let resultado = parseFloat(inicial) + parseFloat(totalLista);
    return resultado;
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Container maxWidth="lg" sx={{ ml: 2 }}>
            <MontoInicial
              inicial={inicial}
              setInicial={setInicial}
              setLista={setLista}
            />
            <IngresosGastos agregarLista={agregarLista} />
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Container maxWidth="lg">
            <Total inicial={inicial} calculo={calculo}></Total>
          </Container>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Container maxWidth="lg">
            <Descripcion lista={lista} setLista={setLista}></Descripcion>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Container maxWidth="lg">
            <Grafica
              lista={lista}
              setLista={setLista}
              inicial={inicial}
            ></Grafica>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
