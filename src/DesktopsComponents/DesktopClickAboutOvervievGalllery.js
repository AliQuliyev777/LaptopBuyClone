import React, { useState, useEffect } from 'react';
import FullScreenImage from './FullScreenImage '; // FullScreenImage bileşenini içe aktar
import { useParams } from 'react-router-dom';

const DesktopClickAboutOverviewGallery = ({ laptops }) => {
  const [largeImageSrc, setLargeImageSrc] = useState('');
  const [, setShowLargeImage] = useState(true);
  const [clickedImage, setClickedImage] = useState(null);
  const { laptopId } = useParams();
  const laptop = laptops && laptops.find(laptop => laptop.laptopId === parseInt(laptopId));

  useEffect(() => {
    if (laptop) {
      setLargeImageSrc(laptop.laptopImage1);
    }
  }, [laptop]);

  if (!laptop) {
    return <div>Laptop not found</div>;
  }

  const handleThumbnailClick = (src) => {
    setLargeImageSrc(src);
    setShowLargeImage(true);
    setClickedImage(src);
  };

  const closeLargeImage = () => {
    setClickedImage(null);
    setShowLargeImage(false);
  };

  return (
    <>

      <div className="DesktopClickAboutOvervievGallleryMain">
        <div className="DesktopClickAboutOvervievGallleryAllDiv">

          <div className="LargeImageOverlay" onClick={closeLargeImage}>
            <FullScreenImage
              imageUrl={largeImageSrc}
              onClose={closeLargeImage}

            />

          </div>
          <div className="DesktopClickAboutOvervievGalllerymainTextandimg">
            <div className="DesktopClickAboutOvervievGalllerymainText">
              <h1>LATEST GEN. GPU READY</h1>
              <p>
                The G7 LANCOOL can accommodate even the beefiest NVIDIA 4000 series graphics cards without breaking a sweat, with enough space for cards as long as a giraffe's neck (at 392mm) and as tall as the stars (at 180mm) while operating in air-cooling mode.
              </p>
            </div>
            <div className="DesktopClickAboutOverviewGallerymainimg">
              <img src={laptop.laptopImage1} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage1)} className={laptop.laptopImage1 === clickedImage ? 'clicked' : ''} />
              <img src={laptop.laptopImage2} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage2)} className={laptop.laptopImage2 === clickedImage ? 'clicked' : ''} />
              <img src={laptop.laptopImage3} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage3)} className={laptop.laptopImage3 === clickedImage ? 'clicked' : ''} />
              <img src={laptop.laptopImage4} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage4)} className={laptop.laptopImage4 === clickedImage ? 'clicked' : ''} />
              <img src={laptop.laptopImage5} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage5)} className={laptop.laptopImage5 === clickedImage ? 'clicked' : ''} />
            </div>
          </div>
        </div>
        <div className="DesktopClickAboutOverviewGalleryreclamimage">
          <div className="DesktopClickAboutOverviewGalleryreclamimagediv">
            <img src="https://cdna.pcpartpicker.com/static/forever/images/userbuild/335798.9c163e491d8fc77963f53febf055bd82.1600.jpg" alt="" />
          </div>
          <div className="DesktopClickAboutOverviewGalleryreclamimagediv">
            <img src="https://www.channelnews.com.au/wp-content/uploads/2023/08/AMD.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopClickAboutOverviewGallery;
