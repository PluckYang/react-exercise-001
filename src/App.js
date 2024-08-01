import { useState } from "react";

import Examples from "./components/Examples";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
