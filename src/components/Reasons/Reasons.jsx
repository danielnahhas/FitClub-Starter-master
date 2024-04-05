import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="1" />
        <img src={image2} alt="2" />
        <img src={image3} alt="3" />
        <img src={image4} alt="4" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="t" />
            <span>
            live a better life.
            </span>
          </div>
          <div>
            <img src={tick} alt="t" />
            <span>
            make you believe in yourself.
            </span>
          </div>
          <div>
            <img src={tick} alt="t" />
            <span>
            make you fall in love with your body.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
