import DisplacementTime from "./displacementtime";
import ForceDisplacement from "./forcedisplacement";
import ForceTime from "./forcetime";

export default function All() {
  return (
    <>
      <ForceDisplacement />
      <hr />
      <ForceTime />
      <hr />
      <DisplacementTime />
    </>
  );
}
