import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Grid } from '@mui/material';

import HeroBanner from './HeroBanner/HeroBanner';
import './Home.css';

import { HashLink } from 'react-router-hash-link';

// import icons
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SettingsIcon from '@mui/icons-material/Settings';
import CancelIcon from '@mui/icons-material/Cancel';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className='logo-name' noWrap component="div">
              Md Ashik Ali
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" className='drawer' open={open}>
          <DrawerHeader className='drawer-header' >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List >
            {['Home', 'About', 'Skills', 'Projects', 'Get in Touch'].map((text, index) => (
              <ListItemButton as={HashLink} smooth to={`#${text.toLowerCase().split(' ').join('-')}`}
                key={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {[<HomeIcon />, <InfoIcon />, <TipsAndUpdatesIcon />, <WorkspacePremiumIcon />, <MailIcon />][index] }
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <List>
            {['Theme'].map((text, index) => (
              <ListItemButton
                key={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }} 
                onClick={()=>setActiveColorPallet(true)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {[<SettingsIcon onClick={()=>setActiveColorPallet(true)} className='theme-select' />][index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
        <Box component="article" className='content-body' sx={{ flexGrow: 1, p: 1 }} lg={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
          
          <HeroBanner />
          <About />
          <Skills />
          <Services />
          <Projects />
          
        </Box>
      </Box>

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