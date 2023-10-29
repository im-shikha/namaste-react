import logo from "../image_assets/cravings-cuisine-logo.png";
import cart from "../image_assets/shopping-cart.png";
import { useState } from "react";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={logo} />
        <h2>Cravings Cuisine</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Support</li>
          <li>
            <img className="cart-img" alt="food-cart" src={cart}></img>
          </li>
          <li>
            <button
              className="login"
              onClick={() =>
                btnLogin === "Login"
                  ? setBtnLogin("Logout")
                  : setBtnLogin("Login")
              }
            >
              {btnLogin}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
