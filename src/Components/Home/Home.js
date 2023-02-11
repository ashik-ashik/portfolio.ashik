import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';

import HeroBanner from './HeroBanner/HeroBanner';
import './Home.css';
import CancelIcon from '@mui/icons-material/Cancel';
import About from '../PublicRoutes/About/About';
import Skills from '../PublicRoutes/Skills/Skills';
import Services from '../PublicRoutes/Services/Services';
import Projects from '../PublicRoutes/Projects/Projects';
import Contact from '../PublicRoutes/Contact/Contact';
import BeFriend from '../PublicRoutes/BeFriend/BeFriend';
import Blogs from '../PublicRoutes/Blogs/Blogs';



const Home = () => {

  

  // color pallete open close state
  const [activeColorPallet, setActiveColorPallet] = useState(false);

  // 
  const [currentTheme, setCurrentTheme] = useState('dark-theme');
  const colorSwitch = themeName => {
    localStorage.setItem('themeColor', themeName);
    setCurrentTheme(themeName)
  };
  useEffect(()=>{
    const getCurrentTheme = localStorage.getItem('themeColor');
    if(getCurrentTheme){
      setCurrentTheme(getCurrentTheme)
    }
  },[currentTheme])

  return (
    <>
      <article className={currentTheme}>
        <HeroBanner />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Blogs />
        <Contact />
        <BeFriend />

      {/* theme color pallate */}
      <div className={`theme-colors ${activeColorPallet ? 'active' : ''}`}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Typography variant='subtitle' className='text-color'>Choose Theme Color:</Typography>
          </Grid>
          <Grid item xs={3} sx={{textAlign:'end'}}>
            <CancelIcon onClick={()=>setActiveColorPallet(false)} className='text-color' sx={{cursor:'pointer'}} />
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
        <Grid item xs={3}>
          <div className="theme-color-box" onClick={()=>colorSwitch('dark-theme')} style={{background:'#222'}}></div>
        </Grid>
        <Grid item xs={3}>
          <div className="theme-color-box" onClick={()=>colorSwitch('blue-theme')} style={{background:'#0650c0'}}></div>
        </Grid>
        <Grid item xs={3}>
          <div className="theme-color-box" onClick={()=>colorSwitch('light-theme')} style={{background:'#fff',border:'1px solid #333'}}></div>
        </Grid>
        <Grid item xs={3}>
          <div className="theme-color-box" onClick={()=>colorSwitch('purple-theme')} style={{background:'#A032AB'}}></div>
        </Grid>
        <Grid item xs={3}>
          <div className="theme-color-box" onClick={()=>colorSwitch('orange-theme')} style={{background:'#FF5421'}}></div>
        </Grid>
        <Grid item xs={3}>
          <div className="theme-color-box" onClick={()=>colorSwitch('parate-theme')} style={{background:'#405d27'}}></div>
        </Grid>
        <Grid item xs={3}>
          <div className="theme-color-box" onClick={()=>colorSwitch('magenta-theme')} style={{background:'#F41C54'}}></div>
        </Grid>
        <Grid item xs={3}>
          <div className="theme-color-box" onClick={()=>colorSwitch('green-theme')} style={{background:'#04AA6D'}}></div>
        </Grid>
          
        </Grid>
      </div>
      </article>

      
    </>
  );
};

export default Home;