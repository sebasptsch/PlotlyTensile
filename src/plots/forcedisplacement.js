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
      data={[
        {
          x: oneone.displacement,
          y: oneone.force,
          mode: "lines",
          name: "1001",
          line: {
            color: red[0],
          },
        },
        {
          x: onetwo.displacement,
          y: onetwo.force,
          mode: "lines",
          name: "1002",
          line: {
            color: red[1],
          },
        },
        {
          x: onethree.displacement,
          y: onethree.force,
          mode: "lines",
          name: "1003",
          line: {
            color: red[2],
          },
        },
        {
          x: onefour.displacement,
          y: onefour.force,
          mode: "lines",
          name: "1004",
          line: {
            color: red[3],
          },
        },
        {
          x: onefive.displacement,
          y: twofive.force,
          mode: "lines",
          name: "1005",
          line: {
            color: red[4],
          },
        },
        {
          x: onesix.displacement,
          y: onesix.force,
          mode: "lines",
          name: "1006",
          line: {
            color: red[5],
          },
        },
        {
          x: twoone.displacement,
          y: twoone.force,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[0],
          },
          name: "2001",
        },
        {
          x: twotwo.displacement,
          y: twotwo.force,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[1],
          },
          name: "2002",
        },
        {
          x: twothree.displacement,
          y: twothree.force,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[2],
          },
          name: "2003",
        },
        {
          x: twofour.displacement,
          y: twofour.force,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[3],
          },
          name: "2004",
        },
        {
          x: twofive.displacement,
          y: twofive.force,
          mode: "lines",
          line: {
            // dash: "dot",
            color: green[4],
          },
          name: "2005",
        },
        {
          x: twosix.displacement,
          y: twosix.force,
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
