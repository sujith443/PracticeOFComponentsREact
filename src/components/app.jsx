import React from "react";
import Day from "./day";
function App() {
  const h1 = (
    <h1 className="heading" style={Day()[1]}>
      {Day()[0]}
    </h1>
  );
  return h1;
}

export default App;
