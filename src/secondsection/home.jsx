import React from 'react';
import "./Home.css";
import bg from "../img/12.jpeg"

const home = () => {
  return (
    <div className='homeContainer'>
        <img src={bg} alt="" />
        <div>
            <p>
                <span style={{color: "#ffff"}}>WELCOME</span>
                <span style={{color: "green"}}>TO</span>
                <span style={{color: "orange"}}>Li-LOOP</span>
            </p>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default home