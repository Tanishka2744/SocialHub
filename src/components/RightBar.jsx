import { useState } from "react";

export default function RightBar({ isDark }) {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", img: "https://i.pravatar.cc/100?img=2", isFollowing: false },
    { id: 2, name: "Bob", img: "https://i.pravatar.cc/100?img=3", isFollowing: false },
    { id: 3, name: "Charlie", img: "https://i.pravatar.cc/100?img=4", isFollowing: false },
    { id: 4, name: "David", img: "https://i.pravatar.cc/100?img=5", isFollowing: false },
    { id: 5, name: "Emma", img: "https://i.pravatar.cc/100?img=6", isFollowing: false },
    { id: 6, name: "John", img: "https://i.pravatar.cc/100?img=7", isFollowing: false },
    { id: 7, name: "Sophia", img: "https://i.pravatar.cc/100?img=8", isFollowing: false },
    { id: 8, name: "Liam", img: "https://i.pravatar.cc/100?img=9", isFollowing: false },
    { id: 9, name: "Noah", img: "https://i.pravatar.cc/100?img=10", isFollowing: false },
    { id: 10, name: "Olivia", img: "https://i.pravatar.cc/100?img=11", isFollowing: false },
    { id: 11, name: "Mason", img: "https://i.pravatar.cc/100?img=12", isFollowing: false },
    { id: 12, name: "Ava", img: "https://i.pravatar.cc/100?img=13", isFollowing: false },
    { id: 13, name: "Ethan", img: "https://i.pravatar.cc/100?img=14", isFollowing: false },
    { id: 14, name: "Isabella", img: "https://i.pravatar.cc/100?img=15", isFollowing: false },
    { id: 15, name: "Jacob", img: "https://i.pravatar.cc/100?img=16", isFollowing: false },
  ]);

  const toggleFollow = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
    ));
  };

  return (
    <div
      className="rightbar"
      style={{
        background: isDark ? "#222" : "white",
        color: isDark ? "white" : "black",
        padding: "15px",
        borderRadius: "8px"
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Suggested</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map(user => (
          <li
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px"
            }}
          >
            {/* LEFT SIDE (IMG + NAME) */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={user.img}
                alt={user.name}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%"
                }}
              />
              <span>{user.name}</span>
            </div>

            {/* FOLLOW BUTTON */}
            <button
              onClick={() => toggleFollow(user.id)}
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                background: user.isFollowing ? "gray" : "#007bff",
                color: "white",
                cursor: "pointer"
              }}
            >
              {user.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}