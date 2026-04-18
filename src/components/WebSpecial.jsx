import { webSpecial } from "../data/webSpecialData";

const WebSpecial = () => {
  return (
    <div className="container" style={{ padding: "30px 0" }}>
      {/* Title */}
      <div style={{ marginBottom: "15px" }}>
        <h2 style={{ margin: 0, fontSize: "26px" }}>Web Specials</h2>
        <div
          style={{
            width: "30px",
            height: "3px",
            background: "red",
            marginTop: "5px",
          }}
        ></div>
      </div>

      {/* Top Row */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Left Big News */}
        <div style={{ flex: 2, position: "relative" }}>
          <img
            src={webSpecial.main.image}
            alt=""
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "15px",
              left: "15px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "22px",
              width: "85%",
              lineHeight: "1.3",
            }}
          >
            {webSpecial.main.title}
          </div>
        </div>

        {/* Center List */}
        <div style={{ flex: 1 }}>
          {webSpecial.list.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #eee",
                fontSize: "15px",
              }}
            >
              • {item}
            </div>
          ))}
        </div>

        {/* Right Ad */}
        <div style={{ flex: 1 }}>
          <img
            src={webSpecial.adImage}
            alt=""
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        </div>
      </div>

      {/* Bottom Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "18px",
          marginTop: "25px",
        }}
      >
        {webSpecial.cards.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt=""
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />

            <p
              style={{
                fontSize: "14px",
                marginTop: "8px",
                lineHeight: "1.4",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebSpecial;