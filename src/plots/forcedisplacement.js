import { defaultValues, data, colors } from "./commons";
import Plot from "react-plotly.js";
import { useState } from "react";

export default function ForceDisplacement() {
  const [errorEnabled, setErrorEnabled] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        value={errorEnabled}
        onChange={(e) => setErrorEnabled(e.target.checked)}
      />
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
            visible: errorEnabled,
          },
        }))}
      />
    </>
  );
}
