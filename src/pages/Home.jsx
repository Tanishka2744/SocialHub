import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import LeftBar from '../components/LeftBar.jsx';
import RightBar from '../components/RightBar.jsx';
import Stories from '../components/Stories.jsx';

export default function Home() {

  // 🌙 DARK MODE
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => setIsDark(!isDark);

  const [stories] = useState([
    { id: 0, user: "You", img: "https://i.pravatar.cc/100?img=1", isOwn: true },
    { id: 1, user: "Alice", img: "https://i.pravatar.cc/100?img=2" },
    { id: 2, user: "Bob", img: "https://i.pravatar.cc/100?img=3" },
    { id: 3, user: "Charlie", img: "https://i.pravatar.cc/100?img=4" },
    { id: 4, user: "David", img: "https://i.pravatar.cc/100?img=5" },
    { id: 5, user: "Emma", img: "https://i.pravatar.cc/100?img=6" },
    { id: 6, user: "Hyun", img: "https://i.pravatar.cc/100?img=7" },
    { id: 7, user: "Kai", img: "https://i.pravatar.cc/100?img=8" },
    { id: 8, user: "Jackson", img: "https://i.pravatar.cc/100?img=9" },
    { id: 9, user: "Thyme", img: "https://i.pravatar.cc/100?img=10" },
    { id: 10, user: "Yura", img: "https://i.pravatar.cc/100?img=11" },
  ]);

  const [posts, setPosts] = useState([
    { id: 1, user: "Alice", content: "Travel vibes ✈️", img: "https://picsum.photos/500/300?random=1", likes: 12, comments: [] },
    { id: 2, user: "Bob", content: "Picture is awesome 🔥", img: "https://picsum.photos/500/300?random=2", likes: 20, comments: [] },
    { id: 3, user: "Charlie", content: "Relaxing 🔥", img: "https://picsum.photos/500/300?random=3", likes: 8, comments: [] },
    { id: 4, user: "Emma", content: "Look at the view 🔥", img: "https://picsum.photos/500/300?random=4", likes: 15, comments: [] },
    { id: 5, user: "John", content: "lovely ☀️", img: "https://picsum.photos/500/300?random=5", likes: 5, comments: [] },
  ]);

  const [newPost, setNewPost] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [commentText, setCommentText] = useState({});

  const handlePost = () => {
    if (!newPost.trim()) return;

    const newData = {
      id: Date.now(),
      user: "You",
      content: newPost,
      img: selectedFile ? URL.createObjectURL(selectedFile) : null,
      likes: 0,
      comments: []
    };

    setPosts([newData, ...posts]);
    setNewPost('');
    setSelectedFile(null);
  };

  const handleLike = (id) => {
    setPosts(posts.map(p =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    ));
  };

  const handleAddComment = (postId) => {
    const text = commentText[postId]?.trim();
    if (!text) return;

    setPosts(posts.map(p =>
      p.id === postId ? { ...p, comments: [...p.comments, { user: "You", text }] } : p
    ));

    setCommentText({ ...commentText, [postId]: '' });
  };

  const handleShare = (postId) => {
    const post = posts.find(p => p.id === postId);
    alert(`You shared ${post.user}'s post!`);
  };

  return (
    <div
      className="home-wrapper"
      style={{
        background: isDark ? "#111" : "#f0f2f5",
        color: isDark ? "white" : "black",
        minHeight: "100vh"
      }}
    >
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      <div className="home-body">
        <LeftBar isDark={isDark} />

        <div className="feed">
          <Stories stories={stories} isDark={isDark} />

          {/* CREATE POST */}
          <div
            className="create-post"
            style={{
              background: isDark ? "#222" : "white",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />

            <div className="input-with-add">
              <input
                type="text"
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                style={{
                  background: isDark ? "#333" : "white",
                  color: isDark ? "white" : "black"
                }}
              />
              <span
                className="add-icon"
                onClick={() => document.getElementById("fileInput").click()}
              >
                +
              </span>
            </div>

            <button className="post-btn" onClick={handlePost}>
              Post
            </button>
          </div>

          {/* POSTS */}
          {posts.map(post => (
            <div
              className="post"
              key={post.id}
              style={{
                background: isDark ? "#222" : "white",
                color: isDark ? "white" : "black",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "20px"
              }}
            >
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <img src={`https://i.pravatar.cc/40?img=${post.id}`} style={{ borderRadius: "50%" }} />
                <div>
                  <strong>{post.user}</strong>
                  <div style={{ fontSize: "10px", color: "gray" }}>1m ago</div>
                </div>
              </div>

              <p>{post.content}</p>
              {post.img && <img src={post.img} style={{ width: "100%", borderRadius: "8px" }} />}

              <div style={{ display: "flex", gap: "15px", cursor: "pointer" }}>
                <span onClick={() => handleLike(post.id)}>❤️ {post.likes}</span>
                <span onClick={() => document.getElementById(`c${post.id}`).focus()}>💬 Comment</span>
                <span onClick={() => handleShare(post.id)}>🔁 Share</span>
              </div>

              {/* COMMENTS */}
              {post.comments.map((c, i) => (
                <div key={i}>
                  <strong>{c.user}</strong>: {c.text}
                </div>
              ))}

              <input
                id={`c${post.id}`}
                value={commentText[post.id] || ''}
                onChange={(e) => setCommentText({ ...commentText, [post.id]: e.target.value })}
                placeholder="Write comment..."
              />
              <button onClick={() => handleAddComment(post.id)}>Post</button>
            </div>
          ))}
        </div>

        <RightBar isDark={isDark} />
      </div>
    </div>
  );
}