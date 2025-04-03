import React from "react";
import "./TopPersonalizationPicks.css";
import { Link } from "react-router-dom";
import UseImage from "../../../../UseImage";

const TopPersonalizationPicks = () => {
  return (
    <>
      <section id="topPersonalizationPicks" className="py-sm-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sectionHeading">
                <h3 className="text-center mb-4">Top Personalization Picks</h3>
              </div>
            </div>
          </div>
          <div className="row topPicksWrapper">
            <div className="col-sm-12">
              <ul className="list-unstyled d-flex justify-content-between mb-0 text-center flex-wrap">
                <li>
                  <Link to="/" title="Area Rugs">
                    <UseImage
                      src="./images/toppick1.png"
                      alt="Area Rugs"
                      className="img-fluid"
                      width={124}
                    />
                    <p>Area Rugs</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Photo And Art Prints">
                    <UseImage
                      src="./images/toppick2.png"
                      alt="Art Prints"
                      className="img-fluid"
                      width={124}
                    />
                    <p>Photo And Art Prints</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Poster Prints">
                    <UseImage
                      src="./images/toppick3.png"
                      alt="Poster Prints"
                      className="img-fluid"
                      width={124}
                    />
                    <p>Poster Prints</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Acrylic Prints">
                    <UseImage
                      src="./images/toppick4.png"
                      alt="Acrylic Prints"
                      className="img-fluid"
                      width={124}
                    />
                    <p>Acrylic Prints</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Canvas Prints">
                    <UseImage
                      src="./images/toppick5.png"
                      alt="Canvas Prints"
                      className="img-fluid"
                      width={124}
                    />
                    <p>Canvas Prints</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Tapestries">
                    <UseImage
                      src="./images/toppick6.png"
                      alt="Tapestries"
                      className="img-fluid"
                      width={124}
                    />
                    <p>Tapestries</p>
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

export default TopPersonalizationPicks;
