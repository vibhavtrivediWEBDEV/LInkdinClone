import React, { useContext } from 'react'
import Navbar from '../navbar/Navbar'
import { DarkModeContext } from '../../context/darkModeContext';
import LeftBar from '../leftBar/LeftBar';
import MainDashboard from './MainDashboard';
import StickyNav from '../Footer/StickyNav';

const Dashboard = () => {

    const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div className='homeDashboard'>
          {/* <LeftBar/> */}
          <div style={{ flex:1 }}>
           <MainDashboard />
          
          </div>
          
        </div>
      </div>
  )
}

export default Dashboard