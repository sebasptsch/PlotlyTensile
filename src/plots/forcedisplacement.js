import { defaultValues, data, colors } from "./commons";
import Plot from "react-plotly.js";

export default function ForceDisplacement() {
  return (
    <Plot
      {...defaultValues("Force Displacement")}
      layout={{
        xaxis: {
          title: "Displacement (mm)",
        },
        yaxis: {
          title: "Force (kN)",
        },
        title: "Force / Displacement",
      }}
      data={data.map((line, index) => ({
        x: line.displacement,
        y: line.force,
        mode: "lines",
        name: line.name,
        line: {
          color: colors[index],
        },
        error_y: {
          type: "constant",
          value: 0.0005,
        },
      }))}
    />
  );
}
