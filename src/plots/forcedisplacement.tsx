import { useState } from "react";
import Plot from "react-plotly.js";
import { colors, data, defaultValues } from "./commons";

export default function ForceDisplacement() {
  const [errorEnabled, setErrorEnabled] = useState(false);
  const [alignZero, setAlignZero] = useState(true)
  return (
    <>
      <input
        type="checkbox"
        checked={errorEnabled}
        onChange={(e) => setErrorEnabled(e.target.checked)}
        id="forcedisplacementcheck"
      />
      <label htmlFor="forcedisplacementcheck">Error Bars</label>
      <input
        type="checkbox"
        checked={alignZero}
        onChange={(e) => setAlignZero(e.target.checked)}
        id="forcedisplacementcheckzero"
      />
      <label htmlFor="forcedisplacementcheckzero">Align Zero</label>
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
          x: alignZero ? line.displacement.map(xval => xval - line.displacement[0]) : line.displacement,
          y: alignZero ? line.force.map(yval => yval - line.force[0]) : line.force,
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
