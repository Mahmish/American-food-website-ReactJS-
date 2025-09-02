import React, { useEffect, useRef } from "react";
import youtube from "../assets/images/youtube-btn.png";
import { Link } from "react-router-dom"; // Import Link

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Dynamically load the Fancybox script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/fancybox/fancybox.umd.js";
    script.async = true;
    script.onload = () => {
      if (window.Fancybox) {
        window.Fancybox.bind(containerRef.current, "[data-fancybox]", {
          animated: true,
          showClass: "fancybox-zoomIn",
          hideClass: "fancybox-zoomOut",
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (window.Fancybox) {
        window.Fancybox.destroy();
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <section className="about-us">
        <div className="container">
          <div className="row text-center">
            {/* aboutUs title */}
            <div className="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 col-xxl-12">
              <div className="about-title">
                <h2>
                  About Us Detail
                </h2>
                <p>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form by injected humour
                </p>
              </div>
            </div>
          </div>

          {/* aboutUs content row */}
          <div className="about-row">
            <div className="row">
              {/* content */}
              <div className="col-lg-6 col-sm-12 col-md-12 col-12 col-xl-6 col-xxl-6">
                <div className="about-content">
                  <h3>Let food be thy medicine medicine be thy food.</h3>
                  <p>
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some form by injected humour randomise words
                    which don't look even slightly believable. If you are going
                    to use a passage <br />
                    <br />
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text.
                  </p>
                  {/* button */}
                  <div className="order-btn">
                    <div className="order-now">
                      <Link to="/order">
                        {" "}
                        <span>Order Now</span>
                        <i className="fa-solid fa-arrow-left"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* image + fancybox */}
              <div className="col-lg-6 col-sm-12 col-md-12 col-12 col-xl-6 col-xxl-6 flex-1" ref={containerRef}>
                  <a
                    href="https://www.youtube.com/watch?v=xPPLbEFbCAo"
                    data-fancybox
                    data-width="640"
                    data-height="360"
                    className="block w-full"
                  >

                  </a>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href="https://www.youtube.com/watch?v=xPPLbEFbCAo"
                      data-fancybox
                      data-width="640"
                      data-height="360"
                    >
                      <div class="aboutImage">

                    <div class="youtubeUs-img">

                    <img src={youtube} alt=""/>

                    </div>

                    </div>
                    </a>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default App;
