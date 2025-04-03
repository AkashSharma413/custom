import React from "react";
import "./PersonalizedLiving.css";
import { Link } from "react-router-dom";
import UseImage from "../../../../UseImage";

const PersonalizedLiving = () => {
  return (
    <>
      <section id="personalizedLiving" className="py-sm-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sectionHeading">
                <h3 className="text-center mb-4">
                  Personalized Living Starts Here
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul className="list-unstyled mb-0 d-flex justify-content-between text-center productList">
                <li>
                  <Link to="/">
                    <UseImage
                      src="./images/Custom_Wall_Tapestry_Satin.jpg"
                      alt="Custom Wall Tapestry - Velvet Satin"
                      height={250}
                    />
                    <p className="mb-0">Custom Wall Tapestry - Velvet Satin</p>
                  </Link>
                  <span>
                    Starting at <b>$17.96</b>
                  </span>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./images/photo_print_framing.jpg"
                      alt="Print - Framing"
                      height={250}
                    />
                    <p className="mb-0">Photo Print - Framing</p>
                  </Link>
                  <span>
                    Starting at <b>$11.59</b>
                  </span>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./images/Hanigng_Canvas-_Natural.png"
                      alt="Hanging Canvas - Natural"
                      height={250}
                    />
                    <p className="mb-0">Hanging Canvas - Natural</p>
                  </Link>
                  <span>
                    Starting at <b>$36.00</b>
                  </span>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./images/Square_Pillow-_Gold_Jacquard.png"
                      alt="Custom Square Throw Pillow - Velvet Satin"
                      height={250}
                    />
                    <p className="mb-0">
                      Custom Square Throw Pillow - Velvet Satin
                    </p>
                  </Link>
                  <span>
                    Starting at <b>$16.95</b>
                  </span>
                </li>
                <li>
                  <Link to="/">
                    <UseImage
                      src="./images/Custom-Monogram-Arm-Tote-Bag-View-02.png"
                      alt="Custom Monogram Arm Tote Bag"
                      height={250}
                    />
                    <p className="mb-0">Custom Monogram Arm Tote Bag</p>
                  </Link>
                  <span>
                    Starting at <b>$27.50</b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-md-5 mt-4">
            <div className="col-sm-12">
              <div className="callToAction text-center">
                <Link to="/" title="Start Creating" className="btn">
                  Start Creating
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalizedLiving;
