import React from 'react';
import DesktopClickAboutOverviewYtbvideo from './DesktopClickAboutOverviewYtbvideo';
import DesktopClickAboutOverviewCooling from './DesktopClickAboutOverviewCooling';
import '../Css/Desktops.css';
import DesktopClickAboutOvervievGalllery from './DesktopClickAboutOvervievGalllery';
import DesktopClickAboutOverviewSpecifation from './DesktopClickAboutOverviewSpecifation';
import ReadytoShipQuerentee from '../ReadyToShipComponents/ReadyToShipGuarentee';
import DesktopClickAboutOverviewSpecifationChasssis from './DesktopClickAboutOverviewSpecifationChasssis';


const DesktopClickAboutOverview = () => {
  return (
    <div className="DesktopClickAboutOverview">
      <DesktopClickAboutOverviewYtbvideo />
      <DesktopClickAboutOverviewCooling/>
      <DesktopClickAboutOvervievGalllery/>
      <DesktopClickAboutOverviewSpecifation/>
      <ReadytoShipQuerentee/>
      <DesktopClickAboutOverviewSpecifationChasssis/>

    </div>

  );
}

export default DesktopClickAboutOverview;
