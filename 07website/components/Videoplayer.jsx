import React, { useRef } from 'react'
import './Videoplayer.css'
import VideoPlayer from '../assets/VideoPlayer.mp4'
const Videoplayer = ({playState,setPlaySet}) => {

  const player =useRef(null);

  const closeplayer =(e)=>{
    if(e.target===player.current){
       setPlaySet(false);
    }
  }

  return (
    <div className={`video-player ${playState?'':' hide'}`} ref={player} onClick={closeplayer}>
      
      <video src={VideoPlayer} autoPlay muted controls></video>

    </div>
  )
}

export default Videoplayer
