import React, { useEffect } from 'react';
import '../Css/Desktops.css';
import DesktopClickAboutCustomize from './DesktopClickAboutCustomize';
import DesktopClickAboutBuild from './DesktopClickAboutBuild';
import DesktopClickAboutOverview from './DesktopClickAboutOverview';
import { useParams } from 'react-router-dom';

const DesktopClickAbout = ({ laptops }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { laptopId } = useParams(); 
  const laptop = laptops && laptops.find(laptop => laptop.laptopId === parseInt(laptopId));

  if (!laptop) {
      return <div>Laptop not found</div>;
  }
  return (
    <>
      <div className="DesktopClickAboutMain">
      <DesktopClickAboutCustomize laptops={laptops} />
        <DesktopClickAboutBuild  laptops={laptops}/>
        <DesktopClickAboutOverview laptops={laptops} />
      </div>
    </>
  );
};

export default DesktopClickAbout;
