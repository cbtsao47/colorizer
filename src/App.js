import React from "react";
import "./App.css";
import Palete from "./components/Palete";
import colors from "./dummyData";
function App() {
  return (
    <div>
      <Palete palette={colors[4]} />
    </div>
  );
}

export default App;
