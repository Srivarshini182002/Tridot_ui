import adBanner from "../assets/images/ad-banner-main.jpg";

const TopBanner = () => {
  return (
    <div style={{ background: "#f5f5f5", padding: "10px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={adBanner}
          alt="ad"
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "auto",   // ✅ IMPORTANT (keeps ratio)
            objectFit: "contain", // ✅ prevents crop
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};

export default TopBanner;