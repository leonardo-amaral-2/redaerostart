import "../styles/gallery.css";

import { useState } from "react";

export function Gallery() {
  const galleryItems = [
    {
      id: 0,
      texto: "Endless Sky",
      descricao: "Expansive cloud cover meeting the blue horizon.",
    },
    {
      id: 1,
      texto: "Above the Clouds",
      descricao:
        "Propeller cutting through clouds with distant mountains in sight.",
    },
    {
      id: 2,
      texto: "Coastal Flight",
      descricao: "Overflying a serene coastline under a clear blue sky.",
    },
    {
      id: 3,
      texto: "Wing View",
      descricao: "The wing gliding smoothly over a sea of clouds.",
    },
    {
      id: 4,
      texto: "Horizon Above",
      descricao: "Soaring high above the cloud blanket, heading into the sky.",
    },
    {
      id: 5,
      texto: "Cloudy Expanse",
      descricao: "A vast field of clouds stretching as far as the eye can see.",
    },
    {
      id: 6,
      texto: "Sunset Glow",
      descricao: "A golden sunset over a peaceful landscape.",
    },
    {
      id: 7,
      texto: "In the Cockpit",
      descricao: "A pilot navigating the skies, focused on the instruments.",
    },
    {
      id: 8,
      texto: "Aurora in the Sky",
      descricao: "A stunning display of aurora lights seen from the cockpit.",
    },
    {
      id: 9,
      texto: "Dusk Flight",
      descricao: "Flying over city lights as the sun sets on the horizon.",
    },
    {
      id: 10,
      texto: "Sunset Horizon",
      descricao:
        "The sun casting its final rays over the horizon from the wing.",
    },
    {
      id: 11,
      texto: "In the Cockpit",
      descricao: "A pilot navigating the skies, focused on the instruments.",
    },
  ];
  return (
    <div className="gallery" id="gallery">
      <div className="gallery-container">
        {galleryItems.map((item) => (
          <GalleryItem
            url={`/gallery/IMG-20240828-WA-${item.id}.jpg`}
            key={item.id}
            texto={item.texto}
            descricao={item.descricao}
          />
        ))}
      </div>
    </div>
  );
}

function GalleryItem({
  url,
  texto,
  descricao,
}: {
  url: string;
  texto: string;
  descricao: string;
}) {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      data-aos="fade-up"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
        }}
      />
      {onHover && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.5,
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            flexDirection: "column",
            padding: "20px",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <h1>{texto}</h1>
          <p>{descricao}</p>
        </div>
      )}
    </div>
  );
}
