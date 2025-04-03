import React from "react";
import "./ProductVariety.css";
import { Link } from "react-router-dom";
import UseImage from "../../../../UseImage";

const ProductVariety = () => {
  return (
    <>
      <section id="productVariety">
        <div className="container mb-5 mt-2">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-11 col-12 productWrapper">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="productThumbnail">
                    <UseImage
                      src="./images/curtainThumb.jpg"
                      alt="Curtain Thumb"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="secHeading mb-3">
                    <h4>Curtain Creations</h4>
                    <p>Personalized Drapes to Set the Ambience</p>
                  </div>
                  <ul className="list-unstyled d-flex">
                    <li>
                      <Link to="/" title="Custom Drapes">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/curtain1.jpg"
                            alt="Custom Drapes"
                          />
                        </div>
                        <p className="mb-0">Custom Drapes</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Blackout Curtains">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/curtain2.jpg"
                            alt="Blackout Curtains"
                          />
                        </div>
                        <p className="mb-0">Blackout Curtains</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Shower Curtains">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/curtain3.jpg"
                            alt="Shower Curtains"
                          />
                        </div>
                        <p className="mb-0">Shower Curtains</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Sheer Curtains">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/curtain4.jpg"
                            alt="Sheer Curtains"
                          />
                        </div>
                        <p className="mb-0">Sheer Curtains</p>
                      </Link>
                    </li>
                  </ul>
                  <div className="callToAction text-center mt-4">
                    <Link to="/" title="Show Me More" className="btn">
                      Show Me More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5 mt-2">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-11 col-12 productWrapper">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="productThumbnail">
                    <UseImage
                      src="./images/tapestryThumb.jpg"
                      alt="Curtain Thumb"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="secHeading mb-3">
                    <h4>Walls of Wonder</h4>
                    <p>Discover Your Wall's Perfect Vibe</p>
                  </div>
                  <ul className="list-unstyled d-flex">
                    <li>
                      <Link to="/" title="Custom Wallpapers">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/tapestry1.png"
                            alt="Custom Wallpapers"
                          />
                        </div>
                        <p className="mb-0">Custom Wallpapers</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Custom Wall Murals">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/tapestry2.png"
                            alt="Custom Wall Murals"
                          />
                        </div>
                        <p className="mb-0">Custom Wall Murals</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Photo And Art Prints">
                        <div className="imgBox mb-3">
                          <UseImage src="./images/tapestry3.png" alt="Art Prints" />
                        </div>
                        <p className="mb-0">Photo And Art Prints</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Canvas Prints">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/tapestry4.png"
                            alt="Canvas Prints"
                          />
                        </div>
                        <p className="mb-0">Canvas Prints</p>
                      </Link>
                    </li>
                  </ul>
                  <div className="callToAction text-center mt-4">
                    <Link to="/" title="Show Me More" className="btn">
                      Show Me More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5 mt-2">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-11 col-12 productWrapper">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="productThumbnail">
                    <UseImage
                      src="./images/pillowThumb.jpg"
                      alt="Curtain Thumb"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="secHeading mb-3">
                    <h4>Pillow Palette</h4>
                    <p>Create Your Corner of Plushy Comfort</p>
                  </div>
                  <ul className="list-unstyled d-flex">
                    <li>
                      <Link to="/" title="Throw Pillows">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/pillow1.jpg"
                            alt="Throw Pillows"
                          />
                        </div>
                        <p className="mb-0">Throw Pillows</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Cushions">
                        <div className="imgBox mb-3">
                          <UseImage src="./images/pillow2.jpg" alt="Cushions" />
                        </div>
                        <p className="mb-0">Cushions</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Bow Pillows">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/pillow3.jpg"
                            alt="Bow Pillows"
                          />
                        </div>
                        <p className="mb-0">Bow Pillows</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Bed Pillows">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/pillow4.jpg"
                            alt="Bed Pillows"
                          />
                        </div>
                        <p className="mb-0">Bed Pillows</p>
                      </Link>
                    </li>
                  </ul>
                  <div className="callToAction text-center mt-4">
                    <Link to="/" title="Show Me More" className="btn">
                      Show Me More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-2">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-11 col-12 productWrapper">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="productThumbnail">
                    <UseImage
                      src="./images/tapestryThumb.jpg"
                      alt="Curtain Thumb"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="secHeading mb-3">
                    <h4>Timeless Tapestries</h4>
                    <p>Personalized Tapestries to Reflect Your Essence</p>
                  </div>
                  <ul className="list-unstyled d-flex">
                    <li>
                      <Link to="/" title="Custom Wall Tapestries">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/tapestry1.jpg"
                            alt="Custom Wall Tapestries"
                          />
                        </div>
                        <p className="mb-0">Custom Wall Tapestries</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Custom Panoramic Tapestries">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/tapestry2.jpg"
                            alt="Custom Panoramic Tapestries"
                          />
                        </div>
                        <p className="mb-0">Custom Panoramic Tapestries</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Custom Triangular Tapestries">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/tapestry3.jpg"
                            alt="Custom Triangular Tapestries"
                          />
                        </div>
                        <p className="mb-0">Custom Triangular Tapestries</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="Custom Hanging Tapestries">
                        <div className="imgBox mb-3">
                          <UseImage
                            src="./images/tapestry4.jpg"
                            alt="Custom Hanging Tapestries"
                          />
                        </div>
                        <p className="mb-0">Custom Hanging Tapestries</p>
                      </Link>
                    </li>
                  </ul>
                  <div className="callToAction text-center mt-4">
                    <Link to="/" title="Show Me More" className="btn">
                      Show Me More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductVariety;
