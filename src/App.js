import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TeamDraw</h1>
      </header>
      <main>
        <Canvas />
      </main>
    </div>
  );
}

export default App;
