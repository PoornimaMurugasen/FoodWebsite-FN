import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Two.css";

import logo from "./img/logo.png";
import ph1 from "./img/phone img1.png";
import ph2 from "./img/phone img2.png";
import ph3 from "./img/phone img3.png";
import ph4 from "./img/phone img4.png";
import ph5 from "./img/phone img5.png";

const navItems = ["Home", "Product", "Faq", "Contact"];

const appSteps = [
  {
    img: ph3,
    title: "Create an Account",
    heading: "Create/login to an existing account to get started",
    desc: "An account is created with your email and a desired password",
  },
  {
    img: ph4,
    title: "Explore Varieties",
    heading: "Shop for your favorite meals as e dey hot.",
    desc: "Shop for your favorite meals or drinks and enjoy while doing it.",
  },
  {
    img: ph5,
    title: "Checkout",
    heading: "When you’re done, check out and get it delivered",
    desc: "When you're done, check out and get it delivered with ease.",
  },
];

const phoneImages = [ph1, ph2];

function Project1() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <>
      
      <img className="logo" width="100px" src={logo} alt="Logo" />

      <nav className="navbar">
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className={item.toLowerCase()}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      
      <div className="bg">
        <div className="cont">
          <h6>Food app</h6>
          <h2>
            Why stay hungry when <br /> you can order from Bella Onojie
          </h2>
          <h6>Download the Bella Onojie food app now on</h6>

          
          <div>
            <a
              className="pl button-link"
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Playstore
            </a>
            <a
              className="ap button-link"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
          </div>

          
          <div className="phone-slider">
            <Slider {...sliderSettings}>
              {phoneImages.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={'Phone ${i + 1}'}
                    style={{ width: "100%", borderRadius: 20 }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <hr />

      
      <div className="app-steps">
        <h3>How the app works</h3>
        {appSteps.map((step, index) => (
          <div
            className={`step-section ${
              index % 2 === 0 ? "left-image" : "right-image"
            }`}
            key={index}
          >
            <div className="step-image">
              <img src={step.img} alt={'Step ${index + 1}'} />
            </div>
            <div className="step-text">
              <h4>{step.title}</h4>
              <h3>{step.heading}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="tv">
        <div className="mp">
          <h3>Download the app now</h3>
          <h6>Available on your favorite store. Start your premium experience now</h6>
          <a
            className="so button-link"
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            Playstore
          </a>
          <a
            className="ta button-link"
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store
          </a>
        </div>
      </div>

      
      <img className="mini" width="100px" src={logo} alt="Footer Logo" />
    </>
  );
}

export default Project1;