import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      style={{
        background: isDark ? "#111" : "#f0f2f5",
        color: isDark ? "white" : "black",
        minHeight: "100vh"
      }}
    >
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      <div style={{ padding: "20px", textAlign: "center" }}>
        <img
          src="https://i.pravatar.cc/150"
          style={{ borderRadius: "50%" }}
        />

        <h2>Username</h2>
        <p>Frontend Developer 💻</p>

        <button style={{ marginTop: "10px" }}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}