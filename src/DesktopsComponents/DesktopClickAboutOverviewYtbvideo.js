import React, { useEffect, useRef } from 'react';

const DesktopClickAboutOverviewYtbvideo = () => {
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
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
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
  const containerRef = useRef(null);
  const isIframeAdded = useRef(false); // Bayrak

  useEffect(() => {
    // Ekran genişliğine göre içerik ekleyin
    if (window.innerWidth >= 1200) {
      // Büyük ekran içeriği (YouTube Player)
      const scriptTag = document.createElement('script');
      scriptTag.src = 'https://www.youtube.com/iframe_api';
      scriptTag.async = true;

      scriptTag.onload = () => {
        const player = new window.YT.Player(containerRef.current, {
          videoId: 'c8JszGqwINY',
          width: 1480,
          height: 600,
          playerVars: {
            autoplay: 1,
            loop: 1,
            mute: 1,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            },
          },
        });
      };

      document.head.appendChild(scriptTag);
    } else if (window.innerWidth <= 767 && !isIframeAdded.current) {
      // Küçük ekran içeriği (YouTube Embed)
      const iframe = document.createElement('iframe');
      iframe.width = '380';
      iframe.height = '294';
      iframe.src = 'https://www.youtube.com/embed/c8JszGqwINY?1=1&mute=1&loop=1&playlist=c8JszGqwINY&enablejsapi=1';
      iframe.frameBorder = '0';
      iframe.allowFullscreen = true;
      iframe.title = 'Meshify C TG and Meshify C Showreel';

      containerRef.current.appendChild(iframe);

      // Bayrağı güncelle, bir tane iframe eklenmiş oldu
      isIframeAdded.current = true;
    }
  }, []);

  return <div ref={containerRef}></div>;
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
};

export default DesktopClickAboutOverviewYtbvideo;
