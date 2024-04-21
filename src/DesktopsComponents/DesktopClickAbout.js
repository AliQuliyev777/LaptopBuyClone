import React, { useEffect } from 'react';
import '../Css/Desktops.css';
import DesktopClickAboutCustomize from './DesktopClickAboutCustomize';
import DesktopClickAboutBuild from './DesktopClickAboutBuild';
import DesktopClickAboutOverview from './DesktopClickAboutOverview';
<<<<<<< Updated upstream

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
=======
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
>>>>>>> Stashed changes
      </div>
    </>
  );
};

export default DesktopClickAbout;
