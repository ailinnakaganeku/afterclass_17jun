import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";

const menuItems = [
  {
    id: 1,
    label: "Techno",
  },
  {
    id: 2,
    label: "Clothes",
  },
  {
    id: 3,
    label: "Decor",
  },
];

const NavBar = () => {
  return (
    <div className="nav">
      <h1 className="nav-logo">EightShop</h1>
      <div className="nav-items">
        {menuItems.map((item) => (
          <a href="/" className="nav-item" key={item.id}>
            {item.label}
          </a>
        ))}
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
