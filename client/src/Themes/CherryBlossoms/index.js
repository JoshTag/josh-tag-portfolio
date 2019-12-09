import React, { useEffect, useCallback } from "react";
import "./CherryBlossom.scss";
import petalSVG from "../../Assets/Images/petal.svg"
import branch from "../../Assets/Images/branch.svg"

const CherryBlossoms = () => {
  let petalLeaf = [];

  const fallingPetals = useCallback(() => {
    let petal = document.querySelectorAll('.petal');

    for (let i = 0, length = petal.length; i < length; ++i) {
      let block = petal[i];
      block.innerHTML = `<div class="rotate"><img src=${petalSVG} class="skewing"/></div>` 
      let scale = Math.random() * 1.5 + .2;
      let animationAdd = block.animate([
        { transform: `translate3d(${i/length*80}vw,0,0) scale(${scale})`, opacity: scale },
        { transform: `translate3d(${i/length*100 + 15}vw,100vh,0) scale(${scale})`, opacity: 1 }
      ], {
        duration: Math.random() * 15000 + 3000,
        iterations: Infinity,
        delay: -(Math.random() * 5000)
      });
      petalLeaf.push(animationAdd);
    }
  }, [petalLeaf])

  useEffect(() => {
    fallingPetals();
  }, [fallingPetals])

  return (
    <>
      <div className="petalContainer">
        <img className="tree-branch" src={branch} alt="Cherry Blossom Tree Branch" />
        <hgroup className="heading-container">
          <h1 className="tracking-in-expand">Joshua Taguicana</h1>
          <h3 className="tracking-in-expand--title">Web Developer</h3>
        </hgroup>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
      </div>
    </>
  )
}

export default CherryBlossoms
