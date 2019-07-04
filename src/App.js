import React, { useState, useEffect } from "react";

import * as d3 from "d3";
import _ from "lodash";

import Preloader from "./Components/Preloader";

import { loadAllData } from "./DataHandling";

function App() {
  const [state, setState] = useState({
    techSalaries: [],
    medianIncomes: [],
    countyNames: []
  });

  useEffect(() => {
    loadAllData(data => setState(data));
  });

  const { techSalaries } = state;

  if (techSalaries.length < 1) {
    return <Preloader />;
  }
  return (
    <div className="App">
      <div className="App container">
        <h1>Loaded {techSalaries.length} salaries</h1>
      </div>
    </div>
  );
}

export default App;
