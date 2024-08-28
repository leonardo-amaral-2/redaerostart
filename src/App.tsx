import { useEffect } from "react";
import { ContactUs } from "./components/contactus";
import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Mission } from "./components/mission";
import { Services } from "./components/services";
import AOS from "aos";
import "aos/dist/aos.css";
import { AboutUS } from "./components/about";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Banner />
      <AboutUS />
      <Services />
      <Mission />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
