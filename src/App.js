import React, { useEffect } from "react";
import { TweenMax, Expo } from 'gsap';
import Parallax from 'parallax-js';
import can from "./Images/Lilt-Can-Mockup.png";
import layer1 from "./Images/pineapple_slice1.png";
import layer2 from "./Images/pineapple_slice2.png";
import layer3 from "./Images/pineapple_slice3.png";
import layer4 from "./Images/whole_pineapple4.png";
import layer5 from "./Images/lemon5.png";
import layer6 from "./Images/lemon3.png";
import layer7 from "./Images/whole_pineapple2.png";
import "./Styles/style.css";

function App() {

  useEffect(() => {
    //for mouse hovering parallax
    const scene = document.getElementById('scene');
    const parallax = new Parallax(scene);

    const onLoad = () => {
      //for animation on page refresh
      TweenMax.from(".logo", 1, {
          opacity: 0,
          x: -20,
          ease: Expo.easeInOut
      })

      TweenMax.staggerFrom(".header__wrap ul li", 1, {
          opacity: 0,
          x: -20,
          ease: Expo.easeInOut
      }, 0.08)

      TweenMax.from(".hero__can img", 1, {
          delay: 0.25,
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__anime", 1, {
          delay: 2,
          opacity: 0,
          y: -400,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__fruits .layer:nth-child(1)", 2, {
          delay: 0.25,
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__fruits .layer:nth-child(2)", 2, {
          delay: 0.35,
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__fruits .layer:nth-child(3)", 2, {
          delay: 0.45,
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__fruits .layer:nth-child(4)", 2, {
          delay: 0.50,
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__fruits .layer:nth-child(5)", 2, {
          delay: 0.65,
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__fruits .layer:nth-child(6)", 2, {
          delay: 0.75,
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__fruits .layer:nth-child(7)", 2, {
          delay: 0.5,
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut
      })

      TweenMax.from(".title", 1, {
          delay: 1.5,
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__text__callTo p", 1, {
          delay: 1.3,
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__text__callTo .main-btn", 1, {
          delay: 1.5,
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut
      })

      TweenMax.from(".hero__sides span", 1, {
          delay: 1.3,
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut
      })
    };

    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, [])

  return (
    <div className="App">
      <main id="main" className="main">
          <header className="header" id="header">
            <div className="container">
              <div className="header__wrap">
                <a className="logo" href="#">
                  <h2>LIVE IT UP <br/>W/LILT</h2>
                </a>
                <ul>
                    <li>
                      <button className="main-btn"><a href="https://iftikhar-rasha.web.app/" target="_blank" rel="noreferrer">Sign Petition</a></button>
                    </li>
                </ul>
              </div>
            </div>
          </header>

          <section className="hero">
            <div className="hero__text">
              <h1 className="title">LIVE IT UP</h1>
              <div className="hero__text__callTo">
                <p>Sign the petition and let’s save a cultural icon.</p>
                <button className="main-btn"><a href="https://iftikhar-rasha.web.app/" target="_blank" rel="noreferrer">Sign Petition</a></button>
              </div>
            </div>
            <div className="hero__can">
                <img src={can} alt="can" width="1074" height="716"/>
            </div>
            <div className="hero__anime">
                <div className="hero__anime__wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="33.41999816894531 107.08999633789062 932.5800170898438 786.0001220703125" preserveAspectRatio="xMidYMid meet" role="img">
                      <defs></defs>
                      <polygon className="cls-3" points="496.86 744.52 496.86 893.09 525.95 893.09 496.86 744.52"></polygon>
                      <polygon className="cls-1" points="730.39 832.05 759.07 805.45 656.62 704.27 730.39 832.05"></polygon>
                      <polygon className="cls-2" points="133.33 155.17 94.47 196.12 223.59 264.1 133.33 155.17"></polygon>
                      <polygon className="cls-4" points="919.88 211.05 902.11 191.19 777.78 262.98 919.88 211.05"></polygon>
                      <polygon className="cls-1" points="931.01 429.65 966 437.52 966 423.96 931.01 429.65"></polygon>
                      <polygon className="cls-2" points="870.62 637.67 893.06 671.46 904.95 657.49 870.62 637.67"></polygon>
                      <polygon className="cls-3" points="515.4 107.09 496.86 107.1 496.86 190.81 496.86 190.81 515.4 107.09"></polygon>
                      <polygon className="cls-1" points="364.08 149.29 337.87 152.18 378.69 222.88 364.08 149.29"></polygon>
                      <polygon className="cls-1" points="634.04 160.74 615.88 160.74 587.9 209.19 634.04 160.74"></polygon>
                      <polygon className="cls-1" points="33.42 400.5 33.42 429.65 131.21 423.96 33.42 400.5"></polygon>
                      <polygon className="cls-4" points="83.22 646.24 97.31 662.41 152.41 624.03 83.22 646.24"></polygon>
                      <polygon className="cls-1" points="264.1 829.2 287.81 832.05 322.25 728.48 264.1 829.2"></polygon>
                    </svg>
                </div>
            </div>
            <div className="hero__fruits">
              <ul id="scene">
                  <li className="layer" data-depth="-.1">
                      <img src={layer1} alt="layer1" width="144" height="111"/>
                  </li>
                  <li className="layer" data-depth="-.3">
                      <img src={layer2} alt="layer2" width="144" height="111"/>
                  </li>
                  <li className="layer" data-depth="-0.75">
                      <img src={layer3} alt="layer3" width="115" height="109"/>
                  </li>
                  <li className="layer" data-depth=".1"> 
                      <img src={layer4} alt="layer4" width="152" height="233"/>
                  </li>
                  <li className="layer" data-depth=".3">
                      <img src={layer5} alt="layer5" width="160" height="157"/>
                  </li>
                  <li className="layer" data-depth="-0.25">
                      <img src={layer6} alt="layer6" width="115" height="121"/>
                  </li>
                  <li className="layer" data-depth="0.2">
                      <img src={layer7} alt="layer7" width="152" height="233"/>
                  </li>
              </ul>
          </div>
            <div className="hero__sides">
              <span className="hero__sides__left">IT’S LILT!</span>
              <span className="hero__sides__right">MORE LILT!</span>
            </div>
          </section>
        </main>
    </div>
  );
}

export default App;
