import React from 'react';
import DesktopClickAboutOverviewYtbvideo from './DesktopClickAboutOverviewYtbvideo';
import DesktopClickAboutOverviewCooling from './DesktopClickAboutOverviewCooling';
import '../Css/Desktops.css';
import DesktopClickAboutOvervievGalllery from './DesktopClickAboutOvervievGalllery';
import DesktopClickAboutOverviewSpecifation from './DesktopClickAboutOverviewSpecifation';
import ReadytoShipQuerentee from '../ReadyToShipComponents/ReadyToShipGuarentee';
import DesktopClickAboutOverviewSpecifationChasssis from './DesktopClickAboutOverviewSpecifationChasssis';
<<<<<<< HEAD
=======
<<<<<<< Updated upstream


const DesktopClickAboutOverview = () => {
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
import { useParams } from 'react-router-dom';


const DesktopClickAboutOverview = ({ laptops }) => {
  const { laptopId } = useParams(); 
  const laptop = laptops.find(laptop => laptop.laptopId === parseInt(laptopId));

  if (!laptop) {
      return <div>Laptop not found</div>;
  }
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
  return (
    <div className="DesktopClickAboutOverview">
      <DesktopClickAboutOverviewYtbvideo />
      <DesktopClickAboutOverviewCooling/>
<<<<<<< HEAD
      <DesktopClickAboutOvervievGalllery laptops={laptops} />
=======
<<<<<<< Updated upstream
      <DesktopClickAboutOvervievGalllery/>
=======
      <DesktopClickAboutOvervievGalllery laptops={laptops} />
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
      <DesktopClickAboutOverviewSpecifation/>
      <ReadytoShipQuerentee/>
      <DesktopClickAboutOverviewSpecifationChasssis/>

    </div>

  );
}

export default DesktopClickAboutOverview;
