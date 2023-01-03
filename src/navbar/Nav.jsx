import React from 'react';
import liloop from "../img/liloop.png";
import "./Nav.css"

const Nav = () => {
  return (
    <div className='navContainer'>
        <img src={liloop} alt="liloop" width={70} />
        <div>
            <p>Home</p>
            <p>Buyback</p>
            <p>About us</p>
            <p>Products</p>
            <p>Contacts</p>
        </div>
    </div>
  )
}

export default Nav