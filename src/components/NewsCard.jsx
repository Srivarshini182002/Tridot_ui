const NewsCard = ({ title }) => {
  return (
    <div style={{ border: "1px solid #eee", padding: "10px" }}>
      <div style={{ height: "150px", background: "#ccc" }}></div>
      <h4>{title}</h4>
    </div>
  );
};

export default NewsCard;