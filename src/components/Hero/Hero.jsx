import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/women-fit.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import NumberCounter from "number-counter";

import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "100px" : "140px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness Coach</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
              animi id! Natus rem ipsam nesciunt ipsum provident nemo temporibus
              dolor. Nostrum et perspiciatis dicta aliquam rem temporibus
              fugiat. Id, consequatur?
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={200} start={150} delay={4} prefix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={20} start={0} delay={4} prefix="+" />
            </span>
            <span>fitness progrmas</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a href="https://wa.me/+9613898007" target="_blank" rel="noreferrer">
            <button className="btn">Get Started</button>
          </a>
          <a href="https://wa.me/+9613898007" target="_blank" rel="noreferrer">
          <button className="btn">Learn More</button>
          </a>
        </div>
      </div>
      <div className="right-h">
        <a href="https://wa.me/+9613898007" target="_blank" rel="noreferrer">
          <button className="btn">Chat Now</button>
        </a>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="hero" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero back"
          className="hero-image-back"
        />
      </div>
    </div>
  );
};

export default Hero;
