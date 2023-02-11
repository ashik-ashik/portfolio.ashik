import { Grid, Typography } from '@mui/material';
import React from 'react';
import './Services.css';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

const Services = () => {
  return (
    <>
      <section id='services'>
        <Typography variant='h3' className='section-title services-title'>Services</Typography>
        <Typography variant='h6' mt={0} className='bolder-text' align='center'>What do I provide?</Typography>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12} lg={4}>
            <div className="service-box">
              <div className="icon"><DesignServicesIcon/></div>
              <Typography variant="h5" mt={2} align="center" component='h5'>Web Design</Typography>
              <Typography paragraph mt={2}>
              Responsive Web Design with HTML,CSS,Boostrap or Tailwind
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
          <div className="service-box">
              <div className="icon"><CodeOffIcon/></div>
              <Typography variant="h5" mt={2} align="center" component='h5'>Web Development</Typography>
              <Typography paragraph mt={2}>
              Responsive design with developement using React.js and Node.js
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
          <div className="service-box">
              <div className="icon"><DevicesOtherIcon/></div>
              <Typography variant="h5" mt={2} align="center" component='h5'>UX/UI Design</Typography>
              <Typography paragraph mt={2}>
              Design Web Ui and also based on user experience in Adobe XD or Figma
              </Typography>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Services;