import React, { useState, useRef } from 'react';
import '../Css/Desktops.css';
import videoFile from '../Video/2023 Nitro 50 - 13th Gen Gaming Desktop - Acer.mp4';

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

const DesktopGamingPCVideoSeconry = () => {
    return (
        <>
            <div className="CustomizationFirstVideo21 ">

                <VideoPlayer videoFile={videoFile} />

            </div>

        </>
    );
};

export default DesktopGamingPCVideoSeconry;
