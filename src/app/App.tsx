import React from 'react';
import './App.css';
import FiguresArea from "../components/figures/figuresArea";
import CanvasArea from "../components/canvas/canvasArea";

function App() {
  return (
    <div className="App">
    <FiguresArea/>
    <CanvasArea/>
    </div>
  );
}

export default App;
