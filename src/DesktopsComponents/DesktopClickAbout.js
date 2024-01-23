import React, { useEffect } from 'react';
import '../Css/Desktops.css';
import DesktopClickAboutCustomize from './DesktopClickAboutCustomize';
import DesktopClickAboutBuild from './DesktopClickAboutBuild';
import DesktopClickAboutOverview from './DesktopClickAboutOverview';

const DesktopClickAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfa yüklendiğinde en üstten başlamak için
  }, []);

  return (
    <>
      <div className="DesktopClickAboutMain">
        <DesktopClickAboutCustomize />
        <DesktopClickAboutBuild />
        <DesktopClickAboutOverview />
      </div>
    </>
  );
};

export default DesktopClickAbout;
