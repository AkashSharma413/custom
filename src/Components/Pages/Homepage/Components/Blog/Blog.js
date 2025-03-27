import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section id="ourBlog" className="py-md-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sectionHeading">
                <h3 className="text-center mb-4">Our Blogs in the Buzz</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
              <div className="blogWrapper">
                <div className="blogThumb mb-3">
                  <Link to="/" title="">
                    <img
                      src="./images/blogThumb1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="date mb-2">Mar 21st 2025</div>
                <h4 className="blogTitle">
                  <Link to="/" title="">
                    How Spring Fragrances Complement Your Home Decor: The
                    Ultimate Guide (2025)
                  </Link>
                </h4>
                <p className="blogContent mb-2">
                  Spring has finally arrived! The days are becoming warmer,
                  flowers are blooming, and you can feel the crisp energy in the
                  air. All these signs...
                </p>
                <Link to="/" title="Tell Me More" className="readMore">
                  Tell Me More
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
              <div className="blogWrapper">
                <div className="blogThumb mb-3">
                  <Link to="/" title="">
                    <img
                      src="./images/blogThumb2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="date mb-2">Mar 20th 2025</div>
                <h4 className="blogTitle">
                  <Link to="/" title="">
                    9 Tips to Bring Spring Vibes into Your Space with Rugs and
                    Floor Decor
                  </Link>
                </h4>
                <p className="blogContent mb-2">
                  Spring home décor trends aren’t just about fresh air and
                  blooming flowers. It’s also the perfect excuse to refresh your
                  home’s vibe. And...
                </p>
                <Link to="/" title="Tell Me More" className="readMore">
                  Tell Me More
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
              <div className="blogWrapper">
                <div className="blogThumb mb-3">
                  <Link to="/" title="">
                    <img
                      src="./images/blogThumb3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="date mb-2">Mar 20th 2025</div>
                <h4 className="blogTitle">
                  <Link to="/" title="">
                    Top Ways to Refresh Your Home with Lightweight Fabrics This
                    Spring
                  </Link>
                </h4>
                <p className="blogContent mb-2">
                  Spring is the perfect time to give your home a fresh, airy
                  feel by swapping out heavy winter textiles for soft textiles
                  for spring refresh.
                </p>
                <Link to="/" title="Tell Me More" className="readMore">
                  Tell Me More
                </Link>
              </div>
            </div>
          </div>
          <div className="row text-center mt-md-5 mt-0">
            <div className="col-sm-12">
              <Link to="/" title="Read All" className="btn readAll">
                Read All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
