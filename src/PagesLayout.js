import { Outlet, NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import logoFooter from "./images/logo_white.png";

export default function Layout() {
  return (
    <>
      <div className="wrapper">
        <div className="header-wrapper">
          <header className="header-logo">
            <img src={logo} alt="logo" className="logo" />
          </header>
          <nav className="navbar">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  A Propos
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Outlet />
      </div>
      <footer className="footer">
        <div className="footer-logo">
          <img src={logoFooter} alt="logo" className="logo_white" />
        </div>
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}
