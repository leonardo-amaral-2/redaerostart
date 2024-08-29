import { Icon } from "@chakra-ui/react";
import "../styles/services.css";
import { FaEarthEurope } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import { GrHostMaintenance } from "react-icons/gr";
import { VscChecklist } from "react-icons/vsc";

export function Services() {
  return (
    <div className="services" data-aos="fade-up" id="services">
      <h1
        style={{
          borderBottom: "5px solid #0094D9",
          color: "#1A458F",
        }}
      >
        Services
      </h1>
      <div className="services-list">
        <div className="services-item">
          <Icon as={FaEarthEurope} fontSize="80px" color="#1A458F" />
          <h2>FERRY FLIGHT</h2>
          <p>Worldwide & North Atlantic Crossing</p>
        </div>
        <div className="services-item">
          <Icon as={VscChecklist} fontSize="80px" color="#1A458F" />
          <h2>PREBUY INSPECTION</h2>
          <p>On-demand consultancy</p>
        </div>
        <div className="services-item">
          <Icon as={GiAirplaneDeparture} fontSize="80px" color="#1A458F" />
          <h2>AIR SERVICES</h2>
          <p>GA Aircraft, PC12, A330, A320, ATR42 and ATR72</p>
        </div>
      </div>
    </div>
  );
}
