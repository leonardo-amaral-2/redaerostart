import { Icon } from "@chakra-ui/react";
import "../styles/services.css";
import { FaEarthEurope } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";

export function Services() {
  return (
    <div className="services" data-aos="fade-up" id="services">
      <h1
        style={{
          borderBottom: "5px solid #1A458F",
        }}
      >
        Services
      </h1>
      <div className="services-list">
        <div className="services-item">
          <Icon as={FaEarthEurope} fontSize="80px" color="#1A458F" />
          <h2>FERRY FLIGHT</h2>
          <p>Worldwide & North Atlantic PC12 & GA ferry flights</p>
        </div>
        <div className="services-item">
          <Icon as={RiMoneyDollarCircleFill} fontSize="80px" color="#1A458F" />
          <h2>PREBUY INSPECTION</h2>
          <p>On-demand consultancy</p>
        </div>
        <div className="services-item">
          <Icon as={GiAirplaneDeparture} fontSize="80px" color="#1A458F" />
          <h2>AIR SERVICES</h2>
          <p>On-demand Crew AIRBUS A330 A320 ATR42 & 72</p>
        </div>
      </div>
    </div>
  );
}
