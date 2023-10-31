import React, {useState} from 'react';
import VideoPlayer from './components/VideoPlayer'; 


function App() {
  const [videoId, setVideoId] = useState('YyOASMrGQzQ'); 
  const [videoIdKey, setVideoIdKey] = useState(videoId); 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setVideoIdKey(videoId);
  };
  return (
    <div className="App"> 
   <form onSubmit={handleSubmit}>
   <input style={{boxSizing:'border-box', width:'100%', padding:'10px'}} value={videoId} placeholder='Youtube Video ID' onChange={((e) => {
      setVideoId(e.target.value)
    })} />
   </form>
      <VideoPlayer key={videoIdKey} videoId={videoIdKey}  />
    </div>
  );
}

export default App;
