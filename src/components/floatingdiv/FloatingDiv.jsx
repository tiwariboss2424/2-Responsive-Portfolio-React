import React from "react";
import "./FloatingDiv.css";
function FloatingDiv({ images, text1, text2 }) {
  return (
    <div className="floatingdiv">
      <img src={images} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
}
export default FloatingDiv;
