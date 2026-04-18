import logo from "../assets/images/logo-india-retailing.png";

const Header = () => {
  return (
    <div style={{ borderBottom: "1px solid #eee", background: "#fff" }}>
      <div
        className="container"
        style={{
          position: "relative",
          padding: "15px 0",
          height: "60px",
        }}
      >
        {/* CENTER LOGO */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img src={logo} alt="logo" style={{ height: "40px" }} />
        </div>

        {/* RIGHT BUTTONS */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              background: "red",
              color: "#fff",
              padding: "6px 12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            SUBSCRIBE
          </button>

          <button
            style={{
              padding: "6px 12px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;