import React, { useEffect, useRef } from 'react';

const DesktopClickAboutOverviewYtbvideo = () => {
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
};

export default DesktopClickAboutOverviewYtbvideo;
