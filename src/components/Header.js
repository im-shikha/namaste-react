import logo from "../image_assets/cravings-cuisine-logo.png";
import cart from "../image_assets/shopping-cart.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  //if dependency array is absent, useEffect hook is called every time Header component renders/re-renders.
  //if dependency array is empty => [], useEffect is called only on the initial render.
  //if we put some dependency inside dependency array, useEffect will be called only when the dependency changes.

  useEffect(() => {
    console.log("Header useEffect called!");
  }, [btnLogin]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={logo} />
        <h2>Cravings Cuisine</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="link" to="/contact-us">
              Contact Us
            </Link>
          </li>

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
