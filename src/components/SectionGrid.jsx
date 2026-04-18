const SectionGrid = ({ title, items }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
        }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ border: "1px solid #eee", padding: "10px" }}>
            <img
              src={item.image}
              style={{ width: "100%", height: "140px", objectFit: "cover" }}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionGrid;