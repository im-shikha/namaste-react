import logo from "../image_assets/cravings-cuisine-logo.png";
import cart from "../image_assets/shopping-cart.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();
  //if dependency array is absent, useEffect hook is called every time Header component renders/re-renders.
  //if dependency array is empty => [], useEffect is called only on the initial render.
  //if we put some dependency inside dependency array, useEffect will be called only when the dependency changes.

  useEffect(() => {
    console.log("Header useEffect called!");
  }, [btnLogin]);

  return (
    <div className="top-0 sm:w-full h-20 sm:h-24 fixed flex justify-between bg-white rounded-md shadow-xl">
      <div className="flex">
        <img
          className="mt-6 sm:mt-4 p-2 h-9 w-9 my-1 mx-2 sm:h-16 sm:w-16 sm:my-3 sm:mx-8"
          alt="logo"
          src={logo}
        />
        <h2 className="sm:mt-4 text-xs sm:text-2xl font-serif text-orange-500 mt-6">
          Cravings Cuisine
        </h2>
      </div>
      <div className="">
        <ul className="flex p-1 mx-5 my-4 sm:p-4 sm:m-4">
          <li className="list-none text-xs sm:text-2xl mx-1 my-2 sm:my-0 sm:mx-5">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="list-none text-xs sm:text-2xl mx-1 my-2 sm:my-0 sm:mx-5">
            <Link className="text-black hover:underline" to="/">
              Home
            </Link>
          </li>

          <li className="list-none text-xs sm:text-2xl mx-1 my-2 sm:my-0 sm:mx-5">
            <Link className="hover:underline" to="/about">
              About
            </Link>
          </li>

          <li className="list-none text-xs sm:text-2xl mx-1 my-2 sm:my-0 sm:mx-5">
            <Link className="hover:underline" to="/contact-us">
              Contact
            </Link>
          </li>

          <li className="list-none text-xs sm:text-2xl mx-1 my-2 sm:my-0 sm:mx-5">
            <Link className="hover:underline" to="/grocery">
              Grocery
            </Link>
          </li>

          <li className="list-none text-xs sm:text-2xl mx-1 my-2 sm:my-0 sm:mx-5">
            Support
          </li>
          <li className="list-none text-xs sm:text-2xl mx-1 my-2 sm:my-0 sm:mx-5">
            <img
              className="w-5 h-5 sm:w-10 sm:h-10 hover:z-10 hover:transform hover:rotate-6 hover:scale-110"
              alt="food-cart"
              src={cart}
            ></img>
          </li>

          <li className="list-none text-xs sm:text-2xl mx-1 my-2 sm:my-0 sm:mx-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-14 sm:w-28"
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
