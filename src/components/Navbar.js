import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
    return (
      <div className="nav-container">
          <div className="nav-logo">
              <img src={logo} alt="logo" />
          </div>
          
          <div className="routes">
                <Link to={"/"}>Home</Link>
                <Link to={"/store"}>Tienda</Link>
          </div>
      </div>
    )
  }