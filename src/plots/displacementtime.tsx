import { useState } from "react";
import Plot from "react-plotly.js";
import { colors, data, defaultValues } from "./commons";

export default function DisplacementTime() {
  const [alignZero, setAlignZero] = useState(true)
  return (<>
    <input
      type="checkbox"
      checked={alignZero}
      onChange={(e) => setAlignZero(e.target.checked)}
      id="forcedisplacementcheckzero"
    />
    <label htmlFor="forcedisplacementcheckzero">Align Zero</label>
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
        x: alignZero ? line.time.map(xval => xval - line.time[0]) : line.time,
        y: alignZero ? line.displacement.map(yval => yval - line.displacement[0]) : line.displacement,
        mode: "lines",
        name: line.name,
        line: {
          color: colors[index],
        },
      }))}
    />
  </>
  );
}
