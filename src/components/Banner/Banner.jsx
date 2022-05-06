import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import "../../styles/_banner.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Banner = () => {

  const options = {
    items: 1,
    dots: false,
    nav: false,
  };

  return (
    <center>
      <div className="inline-block1">
        <OwlCarousel {...options} >
          <div className="item">
            <img src={img1} alt="oke" />
          </div>
          <div className="item">
            <img src={img2} alt="oke" />
          </div>
          <div className="item">
            <img src={img3} alt="oke" />
          </div>
          <div className="item">
            <img src={img4} alt="oke" />
          </div>
        </OwlCarousel>
      </div>
    </center>
  );
};

export default Banner;
