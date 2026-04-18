import NewsCard from "./NewsCard";

const LatestNews = () => {
  const data = [
    { id: 1, title: "News 1" },
    { id: 2, title: "News 2" },
    { id: 3, title: "News 3" },
    { id: 4, title: "News 4" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Latest News</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
        }}
      >
        {data.map((item) => (
          <NewsCard key={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;