import { useState } from "react";
import Plot from "react-plotly.js";
import { colors, data, defaultValues } from "./commons";

export default function ForceTime() {
  const [errorEnabled, setErrorEnabled] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        checked={errorEnabled}
        onChange={(e) => setErrorEnabled(e.target.checked)}
        id="forcetimecheck"
      />
      <label htmlFor="forcetimecheck">Error Bars</label>
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
          x: line.time.map(xval => xval - line.time[0]),
          y: line.force.map(yval => yval - line.force[0]),
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
