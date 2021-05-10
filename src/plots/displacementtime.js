import { defaultValues, red, green } from "./commons";
import Plot from "react-plotly.js";
import oneone from "../data/1001";
import onetwo from "../data/1002";
import onethree from "../data/1003";
import onefour from "../data/1004";
import onefive from "../data/1005";
import onesix from "../data/1006";
import twoone from "../data/2001";
import twotwo from "../data/2002";
import twothree from "../data/2003";
import twofour from "../data/2004";
import twofive from "../data/2005";
import twosix from "../data/2006";

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
      data={[
        {
          x: oneone.time,
          y: oneone.displacement,
          mode: "lines",
          name: "1001",
          line: {
            color: red[0],
          },
        },
        {
          x: onetwo.time,
          y: onetwo.displacement,
          mode: "lines",
          name: "1002",
          line: {
            color: red[1],
          },
        },
        {
          x: onethree.time,
          y: onethree.displacement,
          mode: "lines",
          name: "1003",
          line: {
            color: red[2],
          },
        },
        {
          x: onefour.time,
          y: onefour.displacement,
          mode: "lines",
          name: "1004",
          line: {
            color: red[3],
          },
        },
        {
          x: onefive.time,
          y: twofive.displacement,
          mode: "lines",
          name: "1005",
          line: {
            color: red[4],
          },
        },
        {
          x: onesix.time,
          y: onesix.displacement,
          mode: "lines",
          name: "1006",
          line: {
            color: red[5],
          },
        },
        {
          x: twoone.time,
          y: twoone.displacement,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[0],
          },
          name: "2001",
        },
        {
          x: twotwo.time,
          y: twotwo.displacement,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[1],
          },
          name: "2002",
        },
        {
          x: twothree.time,
          y: twothree.displacement,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[2],
          },
          name: "2003",
        },
        {
          x: twofour.time,
          y: twofour.displacement,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[3],
          },
          name: "2004",
        },
        {
          x: twofive.time,
          y: twofive.displacement,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[4],
          },
          name: "2005",
        },
        {
          x: twosix.time,
          y: twosix.displacement,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[5],
          },
          name: "2006",
        },
      ]}
    />
  );
}
