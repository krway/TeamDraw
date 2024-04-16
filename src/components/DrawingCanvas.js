import React, { useEffect, useRef } from "react";

function DrawingCanvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  let isDrawing = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";

    const startDrawing = (e) => {
      isDrawing = true;
      const { offsetX, offsetY } = e.nativeEvent ? e.nativeEvent : e;
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    };
    const draw = (e) => {
      if (!isDrawing) return;
      const { offsetX, offsetY } = e.nativeEvent ? e.nativeEvent : e;
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        border: "1px solid black",
        backgroundColor: "lightgrey", // Corrected to "lightgrey"
        display: "block", // Ensure the canvas behaves as a block element
      }}
    ></canvas>
  );
}

export default DrawingCanvas;
