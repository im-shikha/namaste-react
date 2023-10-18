import logo from "../../cravings-cuisine-logo.png";

const Header = () => {
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
          <li>MyCart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
