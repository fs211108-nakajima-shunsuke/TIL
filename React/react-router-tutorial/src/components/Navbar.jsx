import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">
          Site Name
        </Link>
        <ul>
          <CustomLink to="/pricing">Pricing</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

//うまくクラス付与ができない
const CustomLink = ({ to, children, ...props }) => {
  const path = window.location.pathname;
  console.log(to);
  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
