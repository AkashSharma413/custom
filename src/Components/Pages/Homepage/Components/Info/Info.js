import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      <section id="infoSec" className="my-4">
        <div className="container border-top py-md-5 py-4">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="text-center mb-3 mb-md-4">
                Buy Customized Home Decor for Every Corner of Your Living Space
              </h3>
              <p>
                Neon Earth, a leading US-based e-commerce company, specializes
                in selling customized and personalized{" "}
                <Link to="/" title="">
                  Wall Arts,
                </Link>{" "}
                wallpapers,
                <Link to="/" title="">
                  Rugs,
                </Link>{" "}
                <Link to="/" title="">
                  Pillows,
                </Link>{" "}
                <Link to="/" title="">
                  Tapestries,
                </Link>{" "}
                <Link to="/" title="">
                  Curtains,
                </Link>{" "}
                wall prints & frames,{" "}
                <Link to="/" title="">
                  Pet Zone,
                </Link>{" "}
                <Link to="/" title="">
                  Bags,
                </Link>{" "}
                and many{" "}
                <Link to="/" title="">
                  More
                </Link>
                .
              </p>
              <p>
                Shape your design just the way you want. Whether it's an image,
                picture, or text, just upload your choice, scale it as you like,
                and we'll print it for you. Plus, for even more options,{" "}
                <Link to="/" title="">
                  explore
                </Link>
                our range of templates. Everything can be personalized to fit
                your style – choose the size, fabric and color that suits you
                best.
              </p>
              <h4>Customizable Products offered by Neon Earth</h4>
              <p>
                Explore our wide selection of customizable home decor and
                lifestyle products, catering to your preferred theme – be it
                kids, vintage, abstract, minimalist, traditional, space, nature,
                food and drink, trending, or more.
              </p>
              <ul className="list-unstyled">
                <li>
                  <strong>Wall Murals:</strong> Choose{" "}
                  <Link to="/" title="">
                    custom wall murals
                  </Link>{" "}
                  that evoke positive emotions or reflect the ambiance you want
                  to create in a particular space.
                </li>
                <li>
                  <strong>Wallpapers:</strong> Tailor each{" "}
                  <Link to="/" title="">
                    custom wallpapers
                  </Link>{" "}
                  to complement the specific decor of individual rooms, ensuring
                  a cohesive and well-coordinated overall aesthetic.
                </li>
                <li>
                  <strong>Tapestries:</strong>{" "}
                  <Link to="/" title="">
                    Custom tapestries
                  </Link>{" "}
                  elevate your home, serving as personalized wall hangings or
                  beach blankets.
                </li>
                <li>
                  <strong>Pillows:</strong> Elevate your comfort and décor with
                  our throw pillows, perfect for adding a cozy touch to any
                  space.
                </li>
                <li>
                  <strong>Cushion Pillows & Covers:</strong> Refresh and protect
                  your cushion pillows effortlessly with our stylish covers,
                  ensuring both comfort and durability.
                </li>
                <li>
                  <strong>Curtains:</strong> Design curtains that complement
                  your interior decor.{" "}
                  <Link to="/" title="">
                    Custom curtains
                  </Link>{" "}
                  allow you to control light, showcase unique patterns, and
                  create a cohesive design theme in your space.
                </li>
                <li>
                  <strong>Custom Door Mats:</strong>{" "}
                  <Link to="/" title="">
                    Personalized door mats
                  </Link>
                  welcome guests with a touch of your personality. They can be
                  customized with names, quotes, or images, adding a warm and
                  inviting touch to your entrance.
                </li>
              </ul>
              <Link to="/" title="Read More" className="readMore">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
