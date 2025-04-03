import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import UseImage from "../../../../UseImage";

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <section id="topHeader" className="py-2 text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul className="list-unstyled d-md-flex justify-content-center mb-0">
                <li>
                  <i className="fa-solid fa-truck-fast"></i> Free Shipping Above
                  $60
                </li>
                <li>
                  <i className="fa-solid fa-certificate"></i> Up to 20% OFF
                  Sitewide. Use Code: REFRESH
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header */}
      <section id="mainHeader" className="py-3 border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6">
              <Link to="#" title="Neonearth">
                <UseImage
                  src="./neonlogo.png"
                  alt="Logo"
                  className="img-fluid"
                  width={180}
                />
              </Link>
            </div>
            <div className="col-lg-3 col-6 order-lg-3">
              <ul className="list-unstyled d-flex justify-content-end mb-0 loginBox">
                <li>
                  <Link to="#">
                    <i className="fa-regular fa-heart"></i>
                    <span className="count">0</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="count">0</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-regular fa-user"></i>
                    <span className="userLogin">Join/Login</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-12 order-lg-2 mt-lg-0 mt-2">
              <div className="searchBox">
                <input type="text" placeholder="Find What Brings You Joy" />
                <button type="submit" id="al" aria-label="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Header */}
      <section id="bottomHeader" className="pt-3 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul className="list-unstyled d-flex justify-content-between mb-0 text-center">
                <li className="active">
                  <Link to="/">
                    <UseImage
                      src="./header/1.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>All</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/2.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>Wall Arts</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/3.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>Tapestries</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/4.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>Rugs & Mats</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/5.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>Pillows</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/6.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>Curtains</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/7.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>Custom Fabric</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/8.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>Pet Zone</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/9.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>Clothing</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/10.png"
                      alt=""
                      className="img-fluid"
                      width="64"
                    />
                    <p>More</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./header/11.png"
                      alt=""
                      className="img-fluid"
                      width={64}
                    />
                    <p>Theme</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
