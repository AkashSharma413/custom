import React from "react";
import "./PersonalizedBanner.css";

const PersonalizedBanner = () => {
  return (
    <>
      <section id="personalizedBannerWrapper">
        <div className="container-fluid p-0 position-relative">
          <img
            src="./images/personalized_web_banner.png"
            alt=""
            className="img-fluid"
          />
          <p className="overlayText">Tap <span>+</span> to Personalize Decor</p>
        </div>
      </section>
    </>
  );
};

export default PersonalizedBanner;
