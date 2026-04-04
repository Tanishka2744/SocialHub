import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ isDark, toggleDarkMode }) {

  const [showNotif, setShowNotif] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: isDark ? "#111" : "#fff",
        color: isDark ? "white" : "black",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >

      {/* 🔥 Logo */}
      <div
        style={{
          fontWeight: "700",
          fontSize: "20px",
          cursor: "pointer"
        }}
        onClick={() => navigate("/home")}
      >
        Social Hub
      </div>

      {/* 🔍 Search */}
      <div style={{ position: "relative", width: "250px" }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "100%",
            padding: "8px 30px 8px 10px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            background: isDark ? "#222" : "white",
            color: isDark ? "white" : "black",
            outline: "none"
          }}
        />
        <span
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer"
          }}
        >
          🔍
        </span>
      </div>

      {/* 👉 RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>

        {/* 👤 USER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer"
          }}
          onClick={() => navigate("/profile")}
        >
          <img
            src="https://i.pravatar.cc/40"
            style={{ width: "35px", borderRadius: "50%" }}
          />
          <span>Username</span>
        </div>

        {/* 🏠 Home */}
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
          🏠
        </span>

        {/* 👤 Profile */}
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/profile")}>
          👤
        </span>

        {/* 💬 Chat */}
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/chat")}>
          💬
        </span>

        {/* 🔔 Notification */}
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onMouseEnter={() => setShowNotif(true)}
          onMouseLeave={() => setShowNotif(false)}
        >
          <span>🔔</span>

          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-10px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 5px",
              fontSize: "10px"
            }}
          >
            4
          </span>

          {showNotif && (
            <div
              style={{
                position: "absolute",
                top: "30px",
                right: "0",
                background: isDark ? "#333" : "white",
                color: isDark ? "white" : "black",
                padding: "6px 10px",
                borderRadius: "5px",
                fontSize: "12px",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)"
              }}
            >
              You have 4 notifications
            </div>
          )}
        </div>

        {/* 🌙 Dark Mode */}
        <span style={{ cursor: "pointer" }} onClick={toggleDarkMode}>
          {isDark ? "🌞" : "🌙"}
        </span>


        {/* 🚪 LOGOUT (NEW) */}
        <span
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => navigate("/")}
        >
          🚪LogOut
        </span>

      </div>
    </div>
  );
}