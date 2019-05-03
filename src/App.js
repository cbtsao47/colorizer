import React from "react";
import "./App.css";
import Palette from "./components/Palette";
import colors from "./dummyData";
import generatePalette from "./helpers/colorHelpers";
function App() {
  return (
    <div>
      <Palette {...colors[4]} />
    </div>
  );
}

export default App;
