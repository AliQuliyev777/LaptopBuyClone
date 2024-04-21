import React, { useState, useRef } from 'react';
import '../Css/Desktops.css';
import videoFile from '../Video/videoplayback.mp4';

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

const DesktopsVideo = () => {
    return (
        <>
            <div className="CustomizationFirstVideo21 ">
                <h1>CUSTOM BUILT GAMING PC</h1>

                <VideoPlayer videoFile={videoFile} />
            </div>

        </>
    );
};

export default DesktopsVideo;
