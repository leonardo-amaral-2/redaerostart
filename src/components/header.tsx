import "../styles/header.css";
import logo from "../assets/active_1.png";

export function Header() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header" data-aos="fade-down">
      <div>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "260px",
          }}
        />
      </div>
      <div className="header-item-list">
        <a href="#banner" onClick={() => handleScroll("banner")}>
          HOME
        </a>
        <a href="#about" onClick={() => handleScroll("about")}>
          ABOUT US
        </a>
        <a href="#services" onClick={() => handleScroll("services")}>
          SERVICES
        </a>
        <a href="#mission" onClick={() => handleScroll("mission")}>
          MISSION
        </a>
        <a href="#gallery" onClick={() => handleScroll("gallery")}>
          GALLERY
        </a>
        <a href="#contact" onClick={() => handleScroll("contact")}>
          CONTACT
        </a>
      </div>
    </div>
  );
}
