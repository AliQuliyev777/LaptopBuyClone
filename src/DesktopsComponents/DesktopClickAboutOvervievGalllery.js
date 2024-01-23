import React, { useState, useEffect } from 'react';
import FullScreenImage from './FullScreenImage '; // FullScreenImage bileşenini içe aktar

const apiUrl = 'https://picsum.photos/v2/list?page=1&limit=5'; // API URL'sini güncelleyin

const DesktopClickAboutOverviewGallery = () => {
  const [images, setImages] = useState([]);
  const [largeImageSrc, setLargeImageSrc] = useState('');
  const [showLargeImage, setShowLargeImage] = useState(true);
  const [clickedImage, setClickedImage] = useState(null);

  useEffect(() => {
    // API'den resimleri al
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setImages(data); // API'den gelen resimleri sakla
        setLargeImageSrc(data[0].download_url); // İlk resmi büyük resim olarak ayarla
      })
      .catch((error) => {
        console.error('API isteği sırasında bir hata oluştu: ', error);
      });
  }, []);

  const handleThumbnailClick = (src) => {
    setLargeImageSrc(src);
    setShowLargeImage(true); // Büyük resmi göster
    setClickedImage(src);

  };

  const closeLargeImage = () => {
    setClickedImage(null);

    setShowLargeImage(true); // Büyük resmi kapat
  };


  const handlePrev = () => {
    
    const currentIndex = images.findIndex((image) => image.download_url === largeImageSrc);
    if (currentIndex > 0) {
      const prevImageUrl = images[currentIndex - 1].download_url;
      setLargeImageSrc(prevImageUrl);
    }
  };
  const handleNext = () => {
    const currentIndex = images.findIndex((image) => image.download_url === largeImageSrc);
    if (currentIndex < images.length - 1) {
      const nextImageUrl = images[currentIndex + 1].download_url;
      setLargeImageSrc(nextImageUrl);
    }
  };


  return (
    <>
      <div className="DesktopClickAboutOvervievGallleryMain">
        <div className="DesktopClickAboutOvervievGallleryAllDiv">

          {showLargeImage && (
            <div className="LargeImageOverlay" onClick={closeLargeImage}>
              <FullScreenImage
                imageUrl={largeImageSrc}
                onClose={closeLargeImage}
                onPrev={handlePrev}
                onNext={handleNext}
              />


            </div>
          )}
          <div className="DesktopClickAboutOvervievGalllerymainTextandimg">
            <div className="DesktopClickAboutOvervievGalllerymainText">
              <h1>LATEST GEN. GPU READY</h1>
              <p>
                The G7 LANCOOL can accommodate even the beefiest NVIDIA 4000 series graphics cards without breaking a sweat, with enough space for cards as long as a giraffe's neck (at 392mm) and as tall as the stars (at 180mm) while operating in air-cooling mode.
              </p>
            </div>
            <div className="DesktopClickAboutOverviewGallerymainimg">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.download_url}
                  alt=""
                  className={image.download_url === clickedImage ? 'clicked' : ''}

                  onClick={() => handleThumbnailClick(image.download_url)}
                />

              ))}

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

