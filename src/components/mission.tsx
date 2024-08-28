import "../styles/mission.css";

import logo from "../assets/redaerostar-logo.png";

export function Mission() {
  return (
    <div className="mission" data-aos="fade-up" id="mission">
      <div className="mission-image-overlay">
        <div className="image-mission"></div>
      </div>
      <div className="mission-text">
        <div className="mission-text-header">
          <h1
            style={{
              borderBottom: "5px solid #1A458F",
            }}
          >
            Mission
          </h1>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "150px",
            }}
          />
        </div>
        <div className="mission-text-list">
          <p>- North Atlantic & worldwide ferry flights</p>

          <p>- EASA & FAA Registred Airplanes</p>
          <p>- Prebuy inspections & technical flights</p>
          <p>- On demand crew experienced FAA & EASA pilots</p>
          <p>- On demand PC12, A330 A320 & ATR42 ATR72 Ferry Crew</p>
        </div>
      </div>
    </div>
  );
}
