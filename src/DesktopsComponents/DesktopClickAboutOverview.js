import React from 'react';
import DesktopClickAboutOverviewYtbvideo from './DesktopClickAboutOverviewYtbvideo';
import DesktopClickAboutOverviewCooling from './DesktopClickAboutOverviewCooling';
import '../Css/Desktops.css';
import DesktopClickAboutOvervievGalllery from './DesktopClickAboutOvervievGalllery';
import DesktopClickAboutOverviewSpecifation from './DesktopClickAboutOverviewSpecifation';
import ReadytoShipQuerentee from '../ReadyToShipComponents/ReadyToShipGuarentee';
import DesktopClickAboutOverviewSpecifationChasssis from './DesktopClickAboutOverviewSpecifationChasssis';
import { useParams } from 'react-router-dom';


const DesktopClickAboutOverview = ({ laptops }) => {
  const { laptopId } = useParams(); 
  const laptop = laptops.find(laptop => laptop.laptopId === parseInt(laptopId));

  if (!laptop) {
      return <div>Laptop not found</div>;
  }
  return (
    <div className="DesktopClickAboutOverview">
      <DesktopClickAboutOverviewYtbvideo />
      <DesktopClickAboutOverviewCooling/>
      <DesktopClickAboutOvervievGalllery laptops={laptops} />
      <DesktopClickAboutOverviewSpecifation/>
      <ReadytoShipQuerentee/>
      <DesktopClickAboutOverviewSpecifationChasssis/>

    </div>

  );
}

export default DesktopClickAboutOverview;
