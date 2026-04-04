export default function LeftBar({ isDark }) {
  return (
    <div
      className="leftbar"
      style={{
        background: isDark ? "#222" : "white",
        color: isDark ? "white" : "black",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
        <li>👥 Friends</li>
        <li>👨‍👩‍👧 Groups</li>
        <li>🛒 Market</li>
        <li>🖼️ Gallery</li>
        <li>🎥 Video</li>
        <li>💬 Messages</li>
        <li style={{ color: "red", cursor: "pointer" }}>🚪 Logout</li>
      </ul>
    </div>
  );
}

