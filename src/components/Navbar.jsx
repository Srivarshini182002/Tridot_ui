const Navbar = () => {
  return (
    <div style={{ borderBottom: "1px solid #eee", background: "#fff" }}>
      
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 0",
        }}
      >

        {/* LEFT MENU ICON */}
        <div>☰</div>

        {/* CENTER MENU */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          <span>Home</span>
          <span>Categories</span>
          <span>IR Prime</span>
          <span>Events</span>
          <span>Bookstore</span>
          <span>Newsletter</span>
          <span>Video</span>
        </div>

        {/* RIGHT DATE */}
        <div style={{ fontSize: "12px", color: "#777" }}>
          Friday, 30 June 2023
        </div>

      </div>

    </div>
  );
};

export default Navbar;