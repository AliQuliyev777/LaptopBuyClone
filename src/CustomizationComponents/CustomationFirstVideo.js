import React, { useState, useRef } from 'react';
import '../Css/Customization.css';
import videoFile from '../Video/Wraps Hype Video.mp4';

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
        <div>
            <video onClick={togglePlay}
                ref={videoRef}
                width="640"
                height="360"
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

const CustomizationFirstVideo = () => {
    return (
        <>
            <div className="CustomizationFirstVideo ">
                <VideoPlayer videoFile={videoFile} />
            </div>
            <div className="CustomizationFirstVideoAbso">
                <h1>OFTEN IMITATED - NEVER DUPLICATED</h1>
                <p>XOTIC PC offers more customization options and services than any other computer company on the market. All are available on desktop or laptop pcs.</p>
            </div>
        </>
    );
};

export default CustomizationFirstVideo;
