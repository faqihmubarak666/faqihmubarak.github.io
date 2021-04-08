import React, { useState, useEffect } from "react";
import "../style/Headers.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../page/HomePage";
import CvPage from "../page/CvPage";
import ContactPage from "../page/ContactPage";

const Headers = (props) => {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <div className="navbar-container">
            {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              FM
            </Link> */}
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cv" className="nav-links" onClick={closeMobileMenu}>
                  CV
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cv" component={CvPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Headers;
