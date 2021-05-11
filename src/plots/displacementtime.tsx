import Plot from "react-plotly.js";
import { colors, data, defaultValues } from "./commons";

export default function DisplacementTime() {
  return (
    <Plot
      {...defaultValues("Displacement Time")}
      layout={{
        xaxis: {
          title: "Time (s)",
        },
        yaxis: {
          title: "Displacement (mm)",
        },
        title: "Displacement / Time",
      }}
      data={data.map((line, index) => ({
        x: line.time,
        y: line.displacement,
        mode: "lines",
        name: line.name,
        line: {
          color: colors[index],
        },
      }))}
    />
  );
}
