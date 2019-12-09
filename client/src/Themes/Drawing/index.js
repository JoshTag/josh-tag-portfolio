import React from "react";

const canvasW = {
  width: '100vw'
}

const canvasH = {
  height: '90vh'
}

const Draw = () => {


  return (
    <>
      <canvas id="canvasHero" style={canvasW, canvasH}></canvas>
    </>
  )
}

export default Draw