import { Link } from "react-router-dom";
import img1 from "../../assets/img/facebook-icon.png";
import img2 from "../../assets/img/search-icon.png";
import img3 from "../../assets/img/soldier.png";

const Header = () => {
  return (
    <div className="header">
      <header className="topbar">
        <span className="logo">Agency</span>
        <div className="menu">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/" className="nav-item">
            About me
          </Link>
          <Link to="/" className="nav-item">
            Work
          </Link>
          <Link to="/" className="nav-item">
            Contact
          </Link>
          <div className="links">
            <Link to="/">
              <img className="icons" src={img1} alt="search bar" />
            </Link>
            <Link to="/">
              <img className="icons" src={img2} alt="facebook" />
            </Link>
          </div>
        </div>
      </header>
      <main className="main">
        <h1 className="f-line">THINK</h1>
        <h2 className="s-line">OUTSIDE</h2>
        <h3 className="t-line">OF THE BOX</h3>
        <button>READ MORE</button>
      </main>
      <img className="soldier" src={img3} alt="soldier" />
    </div>
  );
};

export default Header;
