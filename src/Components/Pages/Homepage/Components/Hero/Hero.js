import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section id="heroSection">
        <div className="container-fluid p-0">
          <Link to="/" title="">
            <img src="./images/hero.png" alt="" className="img-fluid heroImg" />
          </Link>
        </div>
        <div className="container-fluid py-4 border-bottom">
          <div className="container infoWrapper">
            <div className="row">
              <div className="col-sm-12">
                <ul className="list-unstyled mb-0 d-flex justify-content-between">
                  <li>
                    <img src="./images/sitejabber.png" alt="" width="64" />
                    <div>
                      <div className="starRating">
                        <span className="count">
                          <b>4.5</b>
                        </span>
                        <span className="star"></span>
                      </div>
                      <p>Overall Satisfaction Rating</p>
                    </div>
                  </li>
                  <li>
                    <img src="./images/info1.png" alt="" />
                    <p>
                      <b>Tailored Creations</b>
                    </p>
                  </li>
                  <li>
                    <img src="./images/info2.png" alt="" />
                    <p>
                      <b>Best-in-Class Printing</b>
                    </p>
                  </li>
                  <li>
                    <img src="./images/info3.png" alt="" />
                    <p>
                      <b>Diverse Design Library</b>
                    </p>
                  </li>
                  <li>
                    <img src="./images/info4.png" alt="" />
                    <p>
                      <b>Prompt Delivery</b>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
