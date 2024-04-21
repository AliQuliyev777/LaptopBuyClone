import React, { useState, useEffect } from 'react';

const WallpapersSupport = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [images] = useState([
    {
      src: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/spotlight_3000x3000.jpg?v=1675366950',
      alt: 'Image 1',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/abstract3_3000x3000.jpg?v=1675366949',
      alt: 'Image 2',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/Octa1_7932a3e0-847f-4025-8024-71b25e3b0dcd_3000x3000.jpg?v=1675366948',
      alt: 'Image 3',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/tech_3000x3000.jpg?v=1675366948',
      alt: 'Image 4',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/circuit_3000x3000.jpg?v=1675366948',
      alt: 'Image 5',
    },
    {
      src: 'https://staticg.sportskeeda.com/editor/2021/12/8b8fd-16401091933504-1920.jpg',
      alt: 'Image 6',
    },
    // Diğer resimler buraya eklenebilir
  ]);

  const handleImageClick = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  useEffect(() => {
    // Tam ekran görüntü açıldığında kaydırmayı devre dışı bırak
    if (fullScreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Temizleme işlevi, bileşen kaldırıldığında kaydırmayı yeniden etkinleştirir
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [fullScreenImage]);

  return (
    <>
      <div className="WallpapersSupportDivImage">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(image.src)}
          />
        ))}
      </div>
      {fullScreenImage && (
        <div className="WallpapersSupportDivImageFullScreen" onClick={handleCloseFullScreen}>
          <img src={fullScreenImage} alt="" />
        </div>
      )}
    </>
  );
};

export default WallpapersSupport;
