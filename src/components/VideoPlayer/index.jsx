import React from "react";
import VideoPlayer from "./video.tsx";
const subtitleUrlRU = "/assets/ru.vtt";
const subtitleUrlTR = "/assets/tr.vtt";
const subtitleUrlEN = "/assets/en.vtt";

const VideoPlayerPage = ({ videoId }) => {
  const videoUrl = `https://invidious.fdn.fr/latest_version?id=${videoId}&itag=22`;

  const videoJsOptions = {
    sources: [
      {
        src: videoUrl,
        type: "video/mp4",
      },
    ],
    autoplay: true,
    poster: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    tracks: [
      {
        src: subtitleUrlEN,
        kind: "subtitles",
        srclang: "en",
        label: "İngilizce",
        default: false,
      },
      {
        src: subtitleUrlTR,
        kind: "subtitles",
        srclang: "tr",
        label: "Türkçe",
        default: true,
      },
      {
        src: subtitleUrlRU,
        kind: "subtitles",
        srclang: "ru",
        label: "Rusça",
        default: false,
      },
    ],
    html5: {
      hls: { startLevel: 2, overrideNative: true },
    },
  };

  return (
    <div>
      <VideoPlayer options={videoJsOptions} />
    </div>
  );
};

export default VideoPlayerPage;
