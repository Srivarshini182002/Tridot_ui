import { heroData } from "../data/homeData";

const HeroSection = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      
      {/* LEFT MAIN */}
      <div style={{ flex: 2 }}>
        <img
          src={heroData.main.image}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <h3>{heroData.main.title}</h3>
      </div>

      {/* RIGHT SIDE */}
      <div style={{ flex: 1 }}>
        {heroData.side.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <img
              src={item.image}
              style={{ width: "100%", height: "80px", objectFit: "cover" }}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HeroSection;