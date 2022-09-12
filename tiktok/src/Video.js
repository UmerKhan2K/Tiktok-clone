import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
function Video({url,channel,description,song,likes,comments,shares}) {
  const videoRef=useRef(null);
  const [playing,setPlaying]=useState(false);
  const handleVideoPress=()=>{
    if(playing){
      videoRef.current.pause();
      setPlaying(false);
    }
    else{
      videoRef.current.play();
      setPlaying(true);
    }
  }
  return (
    <div className='video'>
      <video 
      onClick={handleVideoPress}
      className='video__player'
      loop 
      ref={videoRef}
      src={url}>
      
      </video>
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} comments={comments} shares={shares} />
      {/*Videosidebar*/}
    </div>
  );
}
export default Video;
