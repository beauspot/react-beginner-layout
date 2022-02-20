import logo from "../images/reactlogo.png";

const Header = () => {
  return (
    <header>
      <nav className="nav-menu">
        <img src={logo} alt="React Logo" className="react-img" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
