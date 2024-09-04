import "../styles/mission.css";

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
              borderBottom: "5px solid #0094D9",
              color: "#1A458F",
            }}
          >
            Mission
          </h1>
          {/* <img
            src={logo}
            alt="logo"
            style={{
              width: "150px",
            }}
          /> */}
        </div>
        <div className="mission-text-list">
          <p>
            Our mission at Active Management is to provide world-class aircraft
            ferry services that prioritize safety, efficiency, and customer
            satisfaction. We aim to be the preferred partner for aviation
            professionals worldwide by delivering reliable, timely, and
            cost-effective solutions tailored to each client’s unique needs. We
            are committed to innovation, continuous improvement, and upholding
            the highest standards of professionalism in every flight we
            undertake.
          </p>
        </div>
      </div>
    </div>
  );
}
