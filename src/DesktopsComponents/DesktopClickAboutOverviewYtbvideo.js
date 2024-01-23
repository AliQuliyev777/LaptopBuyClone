import React, { useEffect, useRef } from 'react';

const DesktopClickAboutOverviewYtbvideo = () => {
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    // YouTube IFrame Player API yüklendikten sonra çalıştırılacak kod
    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player(videoPlayerRef.current, {
        videoId: '9TfR60pM5oU',
        width: 1480, // Genişlik
        height: 1000, // Yükseklik
        playerVars: {
          autoplay: 1, // Otomatik başlat
          loop: 0,     // Sonsuz döngüyü devre dışı bırak
          mute: 1,     // Sessiz
        },
        events: {
          onReady: (event) => {
            event.target.playVideo(); // Videoyu oynat
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo(); // Video tamamlandığında baştan oynat
            }
          },
        },
      });
    };

    if (typeof window.YT !== 'undefined' && typeof window.YT.Player === 'function') {
      // API zaten yüklenmişse doğrudan çalıştır
      onYouTubeIframeAPIReady();
    } else {
      // API yüklenmediyse YouTube IFrame Player API'yi dinlemeye al
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  }, []);

  return (
      <div ref={videoPlayerRef}></div>
  );
};

export default DesktopClickAboutOverviewYtbvideo;
