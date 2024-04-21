import React, { useState } from 'react';
import '../Css/SupportSlide.css';
import HomeSupport from './HomeSupport';
import ReturnSupport from './ReturnsSupport';
import WarrantiessSupport from './WarrantiessSupport';
import WallpapersSupport from './WallpapersSupport';
import { Link } from 'react-router-dom';
import myImage from '../Images/vi-league-of-legends-arcane-tv-series-tv-video-game-characters-hd-wallpaper-22496506272ad447ced4ad7a25216ff2.jpg'


const SupportSlide = () => {
    const [activeSection, setActiveSection] = useState('HomeSupportRequest');

  const handleSectionClick = (sectionName) => {
    // Tıklanan bölümü aktif hale getir
    setActiveSection(sectionName);
  };

  return (
      <>
            <header className="SupportfirstSlide">
                <img className='blurSupportSlide'  src={myImage} alt="" />
                <div className="SupportfirstSlideProducts blurSupportSlide">
                    <h1>ULTIMATE PROTECTION <br />
                        FOR ULTIMATE PRODUCTS</h1>
                </div>
            </header>
      <header className="SupportRequest">
        <div className="SupportRequestNavigation">
          <ul>
            <li>
              <span
                onClick={() => handleSectionClick('HomeSupportRequest')}
                className={activeSection === 'HomeSupportRequest' ? 'active' : ''}
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={() => handleSectionClick('ReturnsSupportRequest')}
                className={activeSection === 'ReturnsSupportRequest' ? 'active' : ''}
              >
                Returns
              </span>
            </li>
            <li>
              <span
                onClick={() => handleSectionClick('WarrantiessSupportRequest')}
                className={activeSection === 'WarrantiessSupportRequest' ? 'active' : ''}
              >
                Warranties
              </span>
            </li>
            <li>
              <span
                onClick={() => handleSectionClick('UtilitiesSupportRequest')}
                className={activeSection === 'UtilitiesSupportRequest' ? 'active' : ''}
              >
                Utilities
              </span>
            </li>
            <li>
              <span
                onClick={() => handleSectionClick('WallpapersSupportRequest')}
                className={activeSection === 'WallpapersSupportRequest' ? 'active' : ''}
              >
                Wallpapers
              </span>
            </li>
          </ul>
        </div>
      </header>

      {/* Diğer bileşenler buraya gelmeli */}
      {activeSection === 'HomeSupportRequest' && (
        <div className="HomeSupportRequest">
          <HomeSupport />
        </div>
      )}
      {activeSection === 'ReturnsSupportRequest' && (
        <div className="ReturnsSupportRequest">
          <ReturnSupport />
        </div>
      )}
      {activeSection === 'WarrantiessSupportRequest' && (
        <div className="WarrantiessSupportRequest">
          <WarrantiessSupport />
        </div>
      )}
      {activeSection === 'UtilitiesSupportRequest' && (
        <div className="UtilitiesSupportRequest">
          {/* UtilitiesSupportRequest içeriği */}
          <div className="UtilitiesSupportRequestAllDivs">
            <ul>
              <li>
                <Link>
                  <i className="fa-solid fa-desktop"></i> <span>Team Viewer Remote Access</span>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fa-solid fa-desktop"></i> <span>GoTo Meeting | Guide for GoToMeeting</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {activeSection === 'WallpapersSupportRequest' && (
        <div className="WallpapersSupportRequest">
          <WallpapersSupport />
        </div>
      )}
    </>
  );
};

export default SupportSlide;
