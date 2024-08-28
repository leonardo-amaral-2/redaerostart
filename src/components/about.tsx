import "../styles/aboutus.css";

import logo from "../assets/redaerostar-logo.png";

export function AboutUS() {
  return (
    <div className="about" data-aos="fade-up" id="about">
      <div className="about-text">
        <div className="about-text-header">
          <h1
            style={{
              borderBottom: "5px solid #1A458F",
            }}
          >
            About Us
          </h1>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "150px",
            }}
          />
        </div>
        <div className="about-text-list">
          <p>
            Kevin CONDETTE, founder of RED AEROSTAR began his first ferry
            flights in 2015 flying single and multi engine piston airplanes
            through Europe & North Atlantic. ​ We are based in western Europe
            wich allows us to ease the transits of planes between Africa, Asia &
            America. We Fly VFR & IFR, PC12, single & multi engine GA planes. We
            also offer A330 A320 & ATR Ferry Crew. Our team is compound of very
            experienced Commercial EASA & FAA Ferry Pilots. ​ The RED AEROSTAR
            minimum requirement in the delivery of your aircraft is the
            EXCELLENCE.
          </p>
        </div>
      </div>
      <div className="about-image-overlay">
        <div className="image-about"></div>
      </div>
    </div>
  );
}
