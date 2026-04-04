import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Chat() {
  const [isDark, setIsDark] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMsg, setNewMsg] = useState("");

  const toggleDarkMode = () => setIsDark(!isDark);

  const users = ["Alice", "Bob", "Charlie", "Emma", "John"];

  const handleSend = () => {
    if (!newMsg.trim() || !selectedUser) return;

    setMessages({
      ...messages,
      [selectedUser]: [
        ...(messages[selectedUser] || []),
        { text: newMsg, fromMe: true }
      ]
    });
    setNewMsg("");
  };

  return (
    <div
      style={{
        background: isDark ? "#111" : "#f0f2f5",
        color: isDark ? "white" : "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      <div
        style={{
          display: "flex",
          flex: 1,
          padding: "20px",
          gap: "20px"
        }}
      >
        {/* LEFT: User List */}
        <div
          style={{
            width: "200px",
            background: isDark ? "#222" : "#fff",
            borderRadius: "8px",
            padding: "10px",
            overflowY: "auto",
            maxHeight: "80vh"
          }}
        >
          <h3>Friends</h3>
          {users.map((user, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedUser(user)}
              style={{
                padding: "8px",
                margin: "5px 0",
                borderRadius: "6px",
                cursor: "pointer",
                background:
                  selectedUser === user
                    ? isDark
                      ? "#555"
                      : "#e0e0e0"
                    : "transparent"
              }}
            >
              {user}
            </div>
          ))}
        </div>

        {/* RIGHT: Chat Box */}
        <div
          style={{
            flex: 1,
            background: isDark ? "#222" : "#fff",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            maxHeight: "80vh"
          }}
        >
          {/* Chat header */}
          <div
            style={{
              padding: "10px",
              borderBottom: `1px solid ${isDark ? "#333" : "#ccc"}`
            }}
          >
            <h3>{selectedUser ? selectedUser : "Select a friend"}</h3>
          </div>

          {/* Chat messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "5px"
            }}
          >
            {selectedUser &&
              (messages[selectedUser] || []).map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    alignSelf: msg.fromMe ? "flex-end" : "flex-start",
                    background: msg.fromMe
                      ? isDark
                        ? "#555"
                        : "#daf1da"
                      : isDark
                      ? "#333"
                      : "#eee",
                    color: isDark ? "white" : "black",
                    padding: "6px 10px",
                    borderRadius: "12px",
                    maxWidth: "70%"
                  }}
                >
                  {msg.text}
                </div>
              ))}
          </div>

          {/* Input */}
          {selectedUser && (
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "10px",
                borderTop: `1px solid ${isDark ? "#333" : "#ccc"}`
              }}
            >
              <input
                type="text"
                placeholder="Type a message..."
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
                style={{
                  flex: 1,
                  padding: "8px",
                  borderRadius: "20px",
                  border: "1px solid #ccc",
                  outline: "none",
                  background: isDark ? "#333" : "#fff",
                  color: isDark ? "white" : "black"
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                style={{
                  padding: "8px 15px",
                  borderRadius: "20px",
                  border: "none",
                  background: "#007bff",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}