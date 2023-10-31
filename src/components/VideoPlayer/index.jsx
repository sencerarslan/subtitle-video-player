import React from 'react';
const subtitleUrlRU = '/assets/ru.vtt';
const subtitleUrlTR = '/assets/tr.vtt';
const subtitleUrlEN = '/assets/en.vtt';

const VideoPlayer = ({ videoId }) => {
    const videoUrl = `https://invidious.fdn.fr/latest_version?id=${videoId}&itag=22`; 
    return (
        <div>
            <video autoPlay width="100%" height="auto" controls poster={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}>
            <source src={videoUrl} type="video/mp4" />
                <track src={subtitleUrlEN} kind="subtitles" srclang="en" label="İngilizce"/> 
                <track src={subtitleUrlTR} kind="subtitles" srclang="tr" label="Türkçe" default /> 
                <track src={subtitleUrlRU} kind="subtitles" srclang="ru" label="Rusça"/> 
            </video> 
        </div>
    );
};

export default VideoPlayer;
