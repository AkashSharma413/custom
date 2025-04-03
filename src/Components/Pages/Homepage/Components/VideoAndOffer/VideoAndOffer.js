import React, { useEffect, useState } from "react";
import "./VideoAndOffer.css";
import { Link } from "react-router-dom";

const VideoAndOffer = () => {
  const [posterSrc, setPosterSrc] = useState("");

  const getOptimizedPoster = (baseName) => {
    const avifTest = document.createElement("canvas").toDataURL("image/avif").indexOf("data:image/avif") === 0;
    const webpTest = document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") === 0;
  
    if (avifTest) return `${baseName}.avif`;
    if (webpTest) return `${baseName}.webp`;
    return `${baseName}.jpg`; // Fallback to JPEG
  };

  useEffect(() => {
    setPosterSrc(getOptimizedPoster("./images/how_to_use_revised"));
  }, []);
  
  return (
    <>
      <section id="videoAndOffer">
        <div className="container bgImage">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-12 leftWrapper">
              <video
                width="100%"
                height="auto"
                poster={posterSrc}
                controls
              >
                <source
                  src="https://ds5e5and3r3r0.cloudfront.net/neonearth_stg/images/contentimages/images/NE-Homepage-Intro-Video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-lg-5 col-md-6 col-12 rightWrapper">
              <div className="ps-lg-5 ps-md-3 w-100 text-xl-center text-md-start text-center">
                <h4 className="h2 d-block topText">
                  Create a Picture-Perfect Home
                  <br className="d-xl-block d-none" />
                  With Exclusive Savings
                </h4>
                <h4 className="d-block text-dark font_bold mb-0 offer_text offerText">
                  15% OFF Sitewide
                </h4>
                <p className="mb-0">
                  + $15 Worth Wallet Points For Next Purchase
                </p>
                <div className="text-center py-md-0 pt-4 d-flex mt-md-3 align-items-center justify-content-center justify-content-md-start justify-content-xl-center offerBtn">
                  <div className="text-center home_cupon py-2 px-3 rounded-2">
                    <span>
                      Code: <span className="colorNeo semibold">NEON15</span>
                    </span>
                  </div>
                  <Link className="btn btn-primary " to="/">
                    Claim Offer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoAndOffer;
