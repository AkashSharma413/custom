import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import UseImage from "../../../../UseImage";

const Footer = () => {
  return (
    <>
      <footer>
        <section id="topFooter" className="pt-sm-5 pt-4 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-12 columnOne">
                <h5 className="mb-3">Designs Come True!</h5>
                <p>
                  At the heart of Neon Earth lies the belief that your home is
                  more than just a physical space; it's a canvas for
                  self-expression. Neon Earth acts as an enabler, providing
                  comfort, and the freedom to ‘Create Your New’. Visualize It -
                  Design it - Bring It to life: because the final product
                  belongs to you.
                </p>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 columnTwo">
                <h5 className="mb-3">Quick Link</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" title="">
                      Order a Swatch Kit
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Bulk Quote
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Track Your Order
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-1 col-md-4 col-sm-6 columnThree">
                <h5 className="mb-3">Help</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" title="">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Refund
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Sitemap
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 columnFour">
                <h5 className="mb-3">Your Account</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" title="">
                      Your Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Your Wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Saved Designs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 columnFive">
                <h5 className="mb-3">The Company</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" title="">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      User Agreement
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 columnSix">
                <h5 className="mb-3">Get in touch</h5>
                <Link to="mailto:wecare@neonearth.com" title="">
                  wecare@neonearth.com
                </Link>
                <ul className="list-unstyled d-flex gap-3 my-2">
                  <li>
                    <Link to="/" title="facebook">
                      <i className="fa-brands fa-square-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="instagram">
                      <i className="fa-brands fa-square-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="pinterest">
                      <i className="fa-brands fa-square-pinterest"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="tiktok">
                      <i className="fa-brands fa-tiktok"></i>
                    </Link>
                  </li>
                </ul>
                <Link to="tel:+8553496366" title="">
                  (855) 349-6366
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="bottomFooter" className="py-sm-5 py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-12">
                <p>Copyright ©2025 neonearth. All Rights Reserved.</p>
              </div>
              <div className="col-xl-7 col-12 mt-xl-0 mt-3 d-sm-flex">
                <p className="me-sm-4">
                  Payment Methods{" "}
                  <UseImage src="./images/paymentmethod1.png" alt="" />
                  <UseImage src="./images/paymentmethod2.png" alt="" />
                  <UseImage src="./images/paymentmethod3.png" alt="" />
                  <UseImage src="./images/paymentmethod4.png" alt="" />
                  <UseImage src="./images/paymentmethod5.png" alt="" />
                  <UseImage src="./images/paymentmethod6.png" alt="" />
                </p>
                <p className="mt-sm-0 mt-2">
                  Secured by:
                  <UseImage
                    src="./images/securityBy.png"
                    alt=""
                    className="secureImg"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
