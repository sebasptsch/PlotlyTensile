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

export const red = [
  "#FC8181",
  "#F56565",
  "#E53E3E",
  "#C53030",
  "#9B2C2C",
  "#822727",
];
export const green = [
  "#68D391",
  "#48BB78",
  "#38A169",
  "#2F855A",
  "#276749",
  "#22543D",
];

export const colors = red.concat(green);

export const data = [
  oneone,
  onetwo,
  onethree,
  onefour,
  onefive,
  onesix,
  twoone,
  twotwo,
  twothree,
  twofour,
  twofive,
  twosix,
];
export const defaultValues = (graphname) => ({
  config: {
    displaylogo: false,
    toImageButtonOptions: {
      filename: `Physics Chart${graphname ? ` - ${graphname}` : ""}`,
    },
  },
  useResizeHandler: true,
  style: { width: "100%", height: "100%" },
});
