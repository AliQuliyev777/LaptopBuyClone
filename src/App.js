import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Views/About';
import Home from './Views/Home';
import Layout from './Views/Layout';
import Contact from './Views/Contact';
import Support from './Views/Support';
import Sponsorships from './Views/Sponsorships';
import Blog from './Views/Blog';
import Customization from './Views/Customization';
import ReadytoShip from './Views/ReadytoShip';
import Desktops from './Views/Desktops';
import PreBuiltPc from './Views/PreBuiltPC';
import DesktopClickAbout from './DesktopsComponents/DesktopClickAbout';
import LaptopsVievAll from './Views/LaptopsViewAll';
import LaptopPage from './LaptopsView/LaptopPage';
import Cardview from './CardviewComponenets/Cardview';
import AccosoriesMain from './ACCESSORIESComponents/AccosoriesMain';
import Account from './AccountLogin/AccountCreate';
import AccountSignIn from './AccountLogin/AccountSignIn';
import LaptopMainDetailCard from './LaptopsView/LaptopMainDetailCard';
import axios from 'axios';
import LaptopPageInfo from './LaptopsView/LaptopPageInfo';
import AddProduct from './AddProduct/AddProduct';

const App = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:44379/api/home');
        setLaptops(response.data);
        console.log('API call successful:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='XoticMainlll'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='support' element={<Support />} />
            <Route path='sponsorships' element={<Sponsorships />} />
            <Route path='blog' element={<Blog />} />
            <Route path='customization' element={<Customization />} />
            <Route path='readytoship' element={<ReadytoShip />} />
            <Route path='desktopsall' element={<Desktops />} />
            <Route path="/DesktopClickAbout" element={<DesktopClickAbout />} />
            <Route path='preabuiltpc' element={<PreBuiltPc />} />
            <Route path='laptopsviewall' element={<LaptopsVievAll />} />
            <Route path="/LaptopPage" element={<LaptopPage />} />
            <Route path="cardview" element={<Cardview />} />
            <Route path="accosoriesmain" element={<AccosoriesMain />} />
            <Route path="/account" element={<Account />} />
            <Route path="/addproduct" element={<AddProduct />} />

            <Route path="/accountsignin" element={<AccountSignIn />} />
            <Route exact path="/" component={LaptopMainDetailCard} />

            <Route path="LaptopPageInfo">
              
            <Route path=":laptopId" element={<LaptopPageInfo laptops={laptops} />} />
            </Route>
            
            <Route path="LaptopPage">
              <Route path=":laptopId" element={<LaptopPage laptops={laptops} />} />
            </Route>

            <Route path="DesktopClickAbout">
              <Route path=":laptopId" element={<DesktopClickAbout laptops={laptops} />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
