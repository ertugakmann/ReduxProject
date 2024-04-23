import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.card);

  return (
    <nav>
      <div className="navContainer">
        <h3>Course Application</h3>
        <div className="basketDiv">
          <p className="basketCount">{quantity}</p>
          <FaShoppingBasket className="basketIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
