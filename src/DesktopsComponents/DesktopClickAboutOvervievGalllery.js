import React, { useState, useEffect } from 'react';
import FullScreenImage from './FullScreenImage '; // FullScreenImage bileşenini içe aktar
<<<<<<< HEAD
=======
<<<<<<< Updated upstream

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

=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
  };

  const closeLargeImage = () => {
    setClickedImage(null);
<<<<<<< HEAD
=======
<<<<<<< Updated upstream

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
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
          <div className="DesktopClickAboutOvervievGalllerymainTextandimg">
            <div className="DesktopClickAboutOvervievGalllerymainText">
              <h1>LATEST GEN. GPU READY</h1>
              <p>
                The G7 LANCOOL can accommodate even the beefiest NVIDIA 4000 series graphics cards without breaking a sweat, with enough space for cards as long as a giraffe's neck (at 392mm) and as tall as the stars (at 180mm) while operating in air-cooling mode.
              </p>
            </div>
            <div className="DesktopClickAboutOverviewGallerymainimg">
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.download_url}
                  alt=""
                  className={image.download_url === clickedImage ? 'clicked' : ''}

                  onClick={() => handleThumbnailClick(image.download_url)}
                />

              ))}

=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
              <img src={laptop.laptopImage1} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage1)} className={laptop.laptopImage1 === clickedImage ? 'clicked' : ''} />
              <img src={laptop.laptopImage2} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage2)} className={laptop.laptopImage2 === clickedImage ? 'clicked' : ''} />
              <img src={laptop.laptopImage3} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage3)} className={laptop.laptopImage3 === clickedImage ? 'clicked' : ''} />
              <img src={laptop.laptopImage4} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage4)} className={laptop.laptopImage4 === clickedImage ? 'clicked' : ''} />
              <img src={laptop.laptopImage5} alt="" onClick={() => handleThumbnailClick(laptop.laptopImage5)} className={laptop.laptopImage5 === clickedImage ? 'clicked' : ''} />
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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
<<<<<<< HEAD
=======
<<<<<<< Updated upstream



=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
    </>
  );
};

export default DesktopClickAboutOverviewGallery;
<<<<<<< HEAD
=======
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
