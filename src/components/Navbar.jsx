import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="/home" className="nav__brand">
        Mel The Dog
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/products" className="nav__link">
            Productos
          </a>
        </li>
        <li className="nav__item">
          <a href="/contact" className="nav__link">
            Contacto
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            Saber Más
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
