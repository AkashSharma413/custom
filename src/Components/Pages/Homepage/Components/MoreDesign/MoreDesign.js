import React from "react";
import "./MoreDesign.css";
import { Link } from "react-router-dom";

const MoreDesign = () => {
  return (
    <>
      <section id="moreDesign" className="py-sm-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sectionHeading">
                <h3 className="text-center mb-4">
                  We Curate, You Create - Explore 60K+ Designs
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul className="list-unstyled mb-0 d-flex justify-content-between text-center flex-wrap productList">
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img
                        src="./images/Design.png"
                        alt="Neon Designs"
                        height="200"
                      />
                    </div>
                    <p className="mb-0">Neon Designs</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img
                        src="./images/Vintage.png"
                        alt="Vintage"
                        height="200"
                      />
                    </div>
                    <p className="mb-0">Vintage</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img
                        src="./images/Abstract.png"
                        alt="Abstract"
                        height="200"
                      />
                    </div>
                    <p className="mb-0">Abstract</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img
                        src="./images/Space_and_Astronomy.png"
                        alt="Space and Astronomy"
                        height="200"
                      />
                    </div>
                    <p className="mb-0">Space and Astronomy</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img
                        src="./images/Nature.png"
                        alt="Nature"
                        height="200"
                      />
                    </div>
                    <p className="mb-0">Nature</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img src="./images/Kids.png" alt="Kids" height="200" />
                    </div>
                    <p className="mb-0">Kids</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img
                        src="./images/Geometric.png"
                        alt="Geometric"
                        height="200"
                      />
                    </div>
                    <p className="mb-0">Geometric</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img
                        src="./images/Minimalist.png"
                        alt="Minimalist"
                        height="200"
                      />
                    </div>
                    <p className="mb-0">Minimalist</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img
                        src="./images/Botanical.png"
                        alt="Botanical"
                        height="200"
                      />
                    </div>
                    <p className="mb-0">Botanical</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="imgBox">
                      <img
                        src="./images/Food_and_Drink.png"
                        alt="Food and Drink"
                        height="200"
                      />
                    </div>
                    <p className="mb-0">Food and Drink</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12">
              <div className="callToAction text-center">
                <Link to="/" title="Start Creating" className="btn">
                  Explore More Designs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreDesign;
