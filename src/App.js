import React, { useState } from "react";
import VideoPlayerPage from "./components/VideoPlayer";
import "./App.css";

function App() {
  const [videoId, setVideoId] = useState("https://www.youtube.com/watch?v=YyOASMrGQzQ");
  const [videoIdKey, setVideoIdKey] = useState(videoId);

  function extractYouTubeVideoId(url) {
    // YouTube video ID'sini çıkarmak için düzenli ifade
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);

    // Eğer eşleşme varsa video ID'sini döndür, yoksa null döndür
    return match ? match[1] : null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setVideoIdKey(videoId);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          style={{ boxSizing: "border-box", width: "100%", padding: "10px" }}
          value={videoId}
          placeholder="Youtube URL"
          onChange={(e) => {
            setVideoId(e.target.value);
          }}
        />
        <button type="submit">Ara...</button>
      </form>
      <div className="video">
        <VideoPlayerPage key={videoIdKey} videoId={extractYouTubeVideoId(videoIdKey)} />
      </div>
    </div>
  );
}

export default App;
