import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

import "../styles/navbar.css";

import account from "../images/acoount.png";
import cart from "../images/cart.png";

export default function Navbar() {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;

  return (
    <nav
      id="header"
      className="navbar navbar-inverse sticky-nav"
      style={{ marginTop: "0", paddingTop: "0" }}
    >
      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header">
        <button
          type="button"
          data-target="/navbarCollapse"
          data-toggle="collapse"
          className="navbar-toggle"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">
          <img
            className="logo"
            style={{ height: "4rem", width: "auto" }}
            src={require("../images/logo.png")}
            alt="Galleriq"
          />
        </Link>
      </div>
      <div id="navbarCollapse" className="collapse navbar-collapse">
        <ul className="nav navbar-nav nav-center">
          <li className="dropdown ">
            <Link
              data-toggle="dropdown"
              className="dropdown-toggle"
              to="/createYourPrint"
            >
              Canvas Prints
            </Link>
            <ul className="dropdown-menu list-inline menu1">
              <li>
                <Link
                  onClick={() => {
                    setProductProperty({
                      ...productProperty,
                      style: "Single",
                      material: "Canvas"
                    });
                  }}
                  to="/singleCanvasPrints"
                  className="center"
                >
                  <img
                    src={require("../images/m1.jpg")}
                    style={{ width: "100%" }}
                    alt=""
                    className="thumbnail"
                  />
                  <h5 style={{ color: "blue" }}>Single Canvas Prints</h5>
                  <p>
                    Single photo on a <br /> canvas frame
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/canvasCollages" className="center">
                  <img
                    src={require("../images/m2.jpg")}
                    style={{ width: "100%" }}
                    alt=""
                    className="thumbnail"
                  />
                  <h5 style={{ color: "blue" }}>Canvas Collages</h5>
                  <p>
                    Multiple photos on <br /> single canvas
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/canvasSplitImage" className="center">
                  <img
                    src={require("../images/m3.jpg")}
                    style={{ width: "100%" }}
                    alt=""
                    className="thumbnail"
                  />
                  <h5 style={{ color: "blue" }}>Canvas Split Image</h5>
                  <p>
                    Single photo split <br /> in multiple panels
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/canvasWallDisplays" className="center">
                  <img
                    src={require("../images/m4.jpg")}
                    style={{ width: "100%" }}
                    className="thumbnail"
                    alt=""
                  />
                  <h5 style={{ color: "blue" }}>Canvas Wall Displays</h5>
                  <p>
                    Multiple photos on
                    <br /> multiple panels
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/floatingFrameCanvas" className="center">
                  <img
                    src={require("../images/m5.jpg")}
                    style={{ width: "100%" }}
                    className="thumbnail"
                    alt=""
                  />
                  <h5 style={{ color: "blue" }}>Floating Frame Canvas</h5>
                  <p>
                    Stretched print frame <br /> inside floating frame
                  </p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown ">
            <Link
              data-toggle="dropdown"
              className="dropdown-toggle"
              to="/createYourPrint"
            >
              Wall Art {/* <b class="caret"></b> */}
            </Link>
            <ul className="dropdown-menu list-inline menu2">
              <li>
                <Link to="/landescape" className="center">
                  <img
                    src={require("../images/m4.jpg")}
                    style={{ width: "100%" }}
                    className="thumbnail"
                    alt=""
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>
                    LandEscape
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="/landescape" className="center">
                  <img
                    src={require("../images/m1.jpg")}
                    style={{ width: "100%" }}
                    className="thumbnail"
                    alt=""
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>
                    LandEscape
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="/landescape" className="center">
                  <img
                    src={require("../images/m3.jpg")}
                    style={{ width: "100%" }}
                    className="thumbnail"
                    alt=""
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>
                    LandEscape
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="/landescape" className="center">
                  <img
                    src={require("../images/m4.jpg")}
                    style={{ width: "100%" }}
                    alt=""
                    className="thumbnail"
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>
                    LandEscape
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="/landescape" className="center">
                  <img
                    src={require("../images/m5.jpg")}
                    style={{ width: "100%" }}
                    alt=""
                    className="thumbnail"
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>
                    LandEscape
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="center">
                  <img
                    src={require("../images/m2.jpg")}
                    style={{ width: "100%" }}
                    alt=""
                    className="thumbnail"
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>
                    Aboriginal
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="/urban" className="center">
                  <img
                    src={require("../images/m3.jpg")}
                    style={{ width: "100%" }}
                    alt=""
                    className="thumbnail"
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>Urban</h5>
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="center">
                  <img
                    src={require("../images/m4.jpg")}
                    style={{ width: "100%" }}
                    className="thumbnail"
                    alt=""
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>
                    Architecture
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="/urban" className="center">
                  <img
                    src={require("../images/m4.jpg")}
                    style={{ width: "100%" }}
                    className="thumbnail"
                    alt=""
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>
                    Abstract
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="/urban" className="center">
                  <img
                    src={require("../images/m5.jpg")}
                    style={{ width: "100%" }}
                    alt=""
                    className="thumbnail"
                  />
                  <h5 style={{ marginTop: "-1rem", color: "blue" }}>
                    Contemporary
                  </h5>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown ">
            <Link
              data-toggle="dropdown"
              className="dropdown-toggle"
              to="/createYourPrint"
            >
              Premium Prints {/* <b class="caret"></b> */}
            </Link>
            <ul className="dropdown-menu list-inline menu3">
              <li>
                <Link to="/acrylicPremiumPrints" className="center">
                  <img
                    src={require("../images/m1.jpg")}
                    style={{ width: "100%" }}
                    alt=""
                    className="thumbnail"
                  />
                  <h5 style={{ color: "blue" }}>Acrylic Prints</h5>
                  <p>
                    Single photo on a <br /> Acrylic frame
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/HDmetalPrint" className="center">
                  <img
                    src={require("../images/m2.jpg")}
                    style={{ width: "100%" }}
                    className="thumbnail"
                    alt=""
                  />
                  <h5 style={{ color: "blue" }}>Canvas Collages</h5>
                  <p>
                    Multiple photos on a<br /> single canvas
                  </p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/catalog">
              Canvas Ideas {/* <b class="caret"></b> */}
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-warning nav-btn"
              to="/createYourPrint"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Create a Canvas
            </Link>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="#">
              <img
                src={require("../images/search.png")}
                style={{ marginTop: "0.4rem" }}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={cart} style={{ marginTop: "0.4rem" }} alt="" />
              {/* <span style={{ margin: 5, verticalAlign: "bottom" }}></span> */}
            </Link>
          </li>
          <li>
            <a className="login-nav" href>
              <img src={account} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
