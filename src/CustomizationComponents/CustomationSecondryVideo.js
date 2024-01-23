import React, { useState, useRef } from 'react';
import '../Css/Customization.css';
import videoFile from '../Video/AORUS Model X - Ultimate Pre-tuned Gaming PC - Product Overview.mp4';

function VideoPlayer({ videoFile }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (

        <div className='VIdeoSecondry'>
            <video onClick={togglePlay}
                ref={videoRef}
     
                autoPlay
                loop
                muted
            >
                <source src={videoFile} type="video/mp4" />
            </video>
            <button >

            </button>
        </div>
        

    );
}

const CustomationSecondryVideo = () => {
    return (
        <>
            <div className="CustomizationFirstVideo2 ">
                <VideoPlayer videoFile={videoFile} />
            </div>
      
        </>
    );
};

export default CustomationSecondryVideo;
