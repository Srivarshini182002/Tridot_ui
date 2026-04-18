import { highlights } from "../data/highlightData";

const Highlights = () => {
  return (
    <div className="container" style={{ padding: "15px 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr 2fr",
          gap: "15px",
        }}
      >
        {highlights.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "10px",
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "6px",
              alignItems: "center",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              style={{
                width: "80px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />

            {/* TEXT */}
            <div>
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {item.tag}
              </p>

              <p style={{ margin: 0, fontSize: "14px" }}>
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;