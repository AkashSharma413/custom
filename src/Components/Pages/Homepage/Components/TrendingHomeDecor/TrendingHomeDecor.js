import React from "react";
import "./TrendingHomeDecor.css";
import { Link } from "react-router-dom";
import UseImage from "../../../../UseImage";

const TrendingHomeDecor = () => {
  return (
    <>
      <section id="trendingHomeDecor" className="mt-2 py-sm-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sectionHeading">
                <h3 className="text-center mb-4">Trending Custom Home Decor</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul className="list-unstyled mb-0 d-flex justify-content-between text-center productList flex-wrap">
                <li>
                  <Link to="/" title="Custom Panoramic Tapestry - Velvet Satin">
                    <UseImage
                      src="./images/trend1.png"
                      alt="Custom Panoramic Tapestry - Velvet Satin"
                      height={200}
                    />
                    <p className="mb-0">
                      Custom Panoramic Tapestry - Velvet Satin
                    </p>
                  </Link>
                  <span>
                    <b>$15.97</b>
                  </span>
                </li>
                <li>
                  <Link to="/" title="Custom Sheer Curtain - Polyester Linen">
                    <UseImage
                      src="./images/trend2.png"
                      alt="Custom Sheer Curtain - Polyester Linen"
                      height={200}
                    />
                    <p className="mb-0">
                      Custom Sheer Curtain - Polyester Linen
                    </p>
                  </Link>
                  <span>
                    <b>$45.36</b>
                  </span>
                </li>
                <li>
                  <Link to="/" title="Custom Women's Hoodie - White">
                    <UseImage
                      src="./images/trend1.png"
                      alt="Custom Women's Hoodie - White"
                      height={200}
                    />
                    <p className="mb-0">Custom Women's Hoodie - White</p>
                  </Link>
                  <span>
                    <b>$42.95</b>
                  </span>
                </li>
                <li>
                  <Link to="/" title="Custom Classic Tote Bag">
                    <UseImage
                      src="./images/trend4.png"
                      alt="Custom Classic Tote Bag"
                      height={200}
                    />
                    <p className="mb-0">Custom Classic Tote Bag</p>
                  </Link>
                  <span>
                    <b>$32.95</b>
                  </span>
                </li>
                <li>
                  <Link to="/" title="Custom Coffee Mugs">
                    <UseImage
                      src="./images/trend5.png"
                      alt="Custom Coffee Mugs"
                      height={200}
                    />
                    <p className="mb-0">Custom Coffee Mugs</p>
                  </Link>
                  <span>
                    <b>$34.50</b>
                  </span>
                </li>
                <li>
                  <Link to="/" title="Custom Waist Apron">
                    <UseImage
                      src="./images/trend2.png"
                      alt="Custom Waist Apron"
                      height={200}
                    />
                    <p className="mb-0">Custom Waist Apron</p>
                  </Link>
                  <span>
                    <b>$22.50</b>
                  </span>
                </li>
                <li>
                  <Link to="/" title="Rug - Luxe Grain - Rectangle">
                    <UseImage
                      src="./images/trend10.png"
                      alt="Rug - Luxe Grain - Rectangle"
                      height={200}
                    />
                    <p className="mb-0">Rug - Luxe Grain - Rectangle</p>
                  </Link>
                  <span>
                    <b>$92.63</b>
                  </span>
                </li>
                <li>
                  <Link to="/" title="Custom Wallpaper - Stone Grain">
                    <UseImage
                      src="./images/trend4.png"
                      alt="Custom Wallpaper - Stone Grain"
                      height={200}
                    />
                    <p className="mb-0">Custom Wallpaper - Stone Grain</p>
                  </Link>
                  <span>
                    <b>$65.32</b>
                  </span>
                </li>
                <li>
                  <Link to="/" title="Custom Women's Full Sarong ">
                    <UseImage
                      src="./images/trend5.png"
                      alt="Custom Women's Full Sarong "
                      height={200}
                    />
                    <p className="mb-0">Custom Women's Full Sarong </p>
                  </Link>
                  <span>
                    <b>$78.65</b>
                  </span>
                </li>
                <li>
                  <Link to="/" title="Doormat - Rectangle">
                    <UseImage
                      src="./images/trend10.png"
                      alt="Doormat - Rectangle"
                      height={200}
                    />
                    <p className="mb-0">Doormat - Rectangle</p>
                  </Link>
                  <span>
                    <b>$9.75</b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-md-5 mt-2">
            <div className="col-sm-12">
              <div className="callToAction text-center">
                <Link to="/" title="Create a New Trend" className="btn">
                  Create a New Trend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingHomeDecor;
