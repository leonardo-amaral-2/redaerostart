import "../styles/aboutus.css";

export function AboutUS() {
  return (
    <div className="about" data-aos="fade-up" id="about">
      <div className="about-text">
        <div className="about-text-header">
          <h1
            style={{
              borderBottom: "5px solid #0094D9",
              color: "#1A458F",
            }}
          >
            About Us
          </h1>
          {/* <img
            src={logo}
            alt="logo"
            style={{
              width: "150px",
            }}
          /> */}
        </div>
        <div className="about-text-list">
          <p>
            Active Management is dedicated to delivering exceptional service
            across the skies.
            <br />
            <br />
            With a team of highly experienced pilots and aviation professionals,
            we specialize in safely and efficiently relocating aircraft to
            destinations around the world.
            <br />
            <br />
            Our commitment to excellence ensures that every flight is executed
            with the utmost precision, reliability, and care.
            <br />
            <br />
            Founded with a passion for aviation and a deep understanding of the
            industry’s unique challenges, Active Management has quickly
            established itself as a trusted partner for leasing companies and
            aircraft owners.
            <br />
            <br />
            Whether it’s moving a single aircraft or managing complex fleet
            transfers, we bring a wealth of expertise to every mission.
            <br />
            <br />
            At Active Management, safety is our top priority.
            <br />
            <br />
            We adhere to the highest industry standards, rigorously maintaining
            our fleet and continuously training our pilots to handle any
            situation.
            <br />
            <br />
            Our global reach, combined with our local knowledge, allows us to
            navigate the intricacies of international regulations and logistics
            seamlessly.
            <br />
            <br />
            We are more than just a ferry flying company; we are your strategic
            partner in aviation, committed to getting your aircraft where it
            needs to be, on time and in perfect condition.
          </p>
        </div>
      </div>
      <div className="about-image-overlay">
        <div className="image-about"></div>
      </div>
    </div>
  );
}
