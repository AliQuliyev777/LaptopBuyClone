import React, { useState } from 'react';
import { useFullScreenHandle, FullScreen } from 'react-full-screen';
import { motion } from 'framer-motion';

const FullScreenImage = ({ imageUrl, onClose, onNext, onPrev }) => {
  const handle = useFullScreenHandle();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFullscreen2 = useFullScreenHandle().active;

  const openFullscreen = () => {
    handle.enter();
    setIsFullscreen(true);
    setShowButtons(true);
  };

  const closeFullscreen = () => {
    handle.exit();
    setIsFullscreen(false);
    setShowButtons(false);
  };

  const handleNextImage = () => {
    if (onNext) {
      const continueNext = onNext();
      if (!continueNext) {
        return;
      }
      if (currentIndex < imageUrl.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handlePrevImage = () => {
    if (onPrev) {
      const continuePrev = onPrev();
      if (!continuePrev) {
        return;
      }
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(imageUrl.length - 1);
      }
    }
  };

  const handleImageClick = () => {
    if (!isFullscreen) {
      openFullscreen();
    }
  };

  return (
    <div>
      <FullScreen handle={handle}>
        <div className={`fullscreen-image-container ${isFullscreen2 ? 'fullscreen-active' : ''}`}>
          <motion.img
            src={imageUrl}
            alt="Current Image"
            initial={isFullscreen2 ? { opacity: 0.7, scale: 1 } : { opacity: 1, scale: 1 }}

            animate={isFullscreen2 ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 1 }}
            whileHover={isFullscreen2 ? { opacity: 0.7, scale: 1.05 } : { opacity: 1, scale: 1.1 }}
            onClick={handleImageClick}
            transition={{ duration: 2 }}
            className={isFullscreen2 ? 'rotate-image' : ''} // Add a class when it's active

          />

          {isFullscreen && showButtons && (
            <motion.div
              className="fullscreen-image-containerFlex flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.button
                onClick={closeFullscreen}
                className="close-fullscreen"
                whileHover={{ scale: 1.2 }
              }
              ></motion.button>
              {onPrev && (
                <motion.button
                  onClick={handlePrevImage}
                  className="prev-image arrow1"
                  whileHover={{ x: -5 }}
                ></motion.button>
              )}
              {onNext && (
                <motion.button
                  onClick={handleNextImage}
                  className="next-image arrow"
                  whileHover={{ x: 5 }}
                ></motion.button>
              )}
            </motion.div>
          )}
        </div>
      </FullScreen>
    </div>
  );
};

export default FullScreenImage;
