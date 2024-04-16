import React from "react";
import DrawingCanvas from "./DrawingCanvas";

function Canvas() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        border: "1px solid black",
        backgroundColor: "light grey",
        display: "block", // Ensure the canvas behaves as a block element
      }}
    >
      <DrawingCanvas />
    </div>
  );
}

export default Canvas;
