import "../styles/banner.css";

export function Banner() {
  return (
    <div className="banner" data-aos="fade-up" id="banner">
      <div className="banner-text">
        <div className="logo-white" />
        <p>A company made by pilots for pilots</p>
        <div className="banner-text-items">
          <p>Air Services GA Aircraft, PC12, A330, A320, ATR42 and ATR72</p>
        </div>
      </div>
      <div className="image-banner" />
    </div>
  );
}
