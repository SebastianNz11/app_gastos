import React, { useState, useEffect } from "react";
import { VictoryArea, VictoryChart, VictoryAxis } from "victory";
import { Box, Typography, Paper } from "@mui/material";

export const Grafica = ({ lista, inicial }) => {
  const [datosGrafica, setDatosGrafica] = useState([]);

  useEffect(() => {
    const filtroGastos = lista.filter((l) => l.numero < 0);
    const filtroIngresos = lista.filter((l) => l.numero > 0);

    const sumaGastos = Math.abs(
      filtroGastos.reduce((total, l) => total + l.numero, 0)
    );
    const sumaIngresos = filtroIngresos.reduce(
      (total, l) => total + l.numero,
      0
    );

    const total = sumaGastos + sumaIngresos + parseFloat(inicial);

    const datos = [
      { x: "Gastos", y: sumaGastos },
      { x: "Ingresos", y: sumaIngresos + parseFloat(inicial) },
    ];

    setDatosGrafica(datos);
  }, [lista, inicial]);

  return (
    <Paper elevation={5}>
      <VictoryChart>
        <VictoryAxis tickValues={[1, 2]} tickFormat={["Gastos", "Ingresos"]} />
        <VictoryArea
          data={datosGrafica}
          style={{
            data: { fill: (d) => (d.x === "Gastos" ? "#e74c3c" : "#2ecc71") },
          }}
        />
      </VictoryChart>
    </Paper>
  );
};
