import DisplacementTime from "./displacementtime";
import ForceDisplacement from "./forcedisplacement";
import ForceTime from "./forcetime";

export default function All() {
  return (
    <>
      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/dt">Displacement / Time</a>
        </li>
        <li>
          <a href="/fd"> Force / Displacement</a>
        </li>
        <li>
          <a href="/ft">Force / Time</a>
        </li>
      </ul>
      <ForceDisplacement />
      <hr />
      <ForceTime />
      <hr />
      <DisplacementTime />
    </>
  );
}
