import { defaultValues, data, colors } from "./commons";
import Plot from "react-plotly.js";

export default function ForceTime() {
  return (
    <Plot
      {...defaultValues("Force Time")}
      layout={{
        xaxis: {
          title: "Time (s)",
        },
        yaxis: {
          title: "Force (kN)",
        },
        title: "Force / Time",
      }}
      data={data.map((line, index) => ({
        x: line.time,
        y: line.force,
        mode: "lines",
        name: line.name,
        error_y: {
          type: "constant",
          value: 0.0005,
        },
        line: {
          color: colors[index],
        },
      }))}
    />
  );
}
