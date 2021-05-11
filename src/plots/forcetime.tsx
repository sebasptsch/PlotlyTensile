import { useState } from "react";
import Plot from "react-plotly.js";
import { colors, data, defaultValues } from "./commons";

export default function ForceTime() {
  const [errorEnabled, setErrorEnabled] = useState(false);
  const [alignZero, setAlignZero] = useState(true)
  return (
    <>
      <input
        type="checkbox"
        checked={errorEnabled}
        onChange={(e) => setErrorEnabled(e.target.checked)}
        id="forcetimecheck"
      />
      <label htmlFor="forcetimecheck">Error Bars</label>
      <input
        type="checkbox"
        checked={alignZero}
        onChange={(e) => setAlignZero(e.target.checked)}
        id="forcetimecheckzero"
      />
      <label htmlFor="forcetimecheckzero">Align Zero</label>
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
          x: alignZero ? line.time.map(xval => xval - line.time[0]) : line.time,
          y: alignZero ? line.force.map(yval => yval - line.force[0]) : line.force,
          mode: "lines",
          name: line.name,
          error_y: {
            type: "constant",
            value: 0.0005,
            visible: errorEnabled,
          },
          line: {
            color: colors[index],
          },
        }))}
      />
    </>
  );
}
