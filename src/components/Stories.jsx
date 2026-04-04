export default function Stories({ stories, isDark }) {
  return (
    <div
      className="stories"
      style={{
        background: isDark ? "#222" : "white",
        color: isDark ? "white" : "black",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "20px"
      }}
    >
      <div className="stories-scroll">
        {stories.map((story) => (
          <div key={story.id} className="story">
            <div className="story-ring">
              <img src={story.img} alt={story.user} />
              {story.isOwn && <div className="add-story">+</div>}
            </div>
            <p>{story.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
}