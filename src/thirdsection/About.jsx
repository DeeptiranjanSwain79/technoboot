import React from "react";
import "./About.css";
import img from "../img/imagebg2.jpg";
import product from "../img/products_2.jpg";

const About = () => {
  return (
    <div className="aboutContainer">
      <img src={img} alt="" />

      <div>
        <div className="aboutText">
          <p>
            WORRIED ABOUT HIGH UP-<br/>FRONT COST LITHIUM BATTERIES FOR YOUR VEHICLE?
          </p>
          <span>Get started with us to explore the exciting</span>
          <ol className="ol">
            <p><span>1</span><li>Long Battery Life</li></p>
            <p><span>2</span><li>Reduce total owenership cost your vehicle.</li></p>
            <p><span>3</span><li>
              Use lithium batteries at 1.5 times price of lead-acid battery with
              3 times the life.
            </li></p>
          </ol>
        </div>
        <img src={product} alt="" width={600} />
      </div>
    </div>
  );
};

export default About;
