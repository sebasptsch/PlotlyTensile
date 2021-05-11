import DisplacementTime from "./plots/displacementtime";
import ForceDisplacement from "./plots/forcedisplacement";
import ForceTime from "./plots/forcetime";
import { BrowserRouter as Router, Route } from "react-router-dom";
import All from "./plots/all";

function App() {
  return (
    <Router>
      <Route exact path="/" render={All} />
      <Route path="/dt" render={DisplacementTime} />
      <Route path="/fd" render={ForceDisplacement} />
      <Route path="/ft" render={ForceTime} />
    </Router>
  );
}

export default App;
