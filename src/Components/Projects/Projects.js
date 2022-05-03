import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import './Projects.css';


const Projects = () => {
  
  return (
    <section id='projects'>
      <Typography variant="h3" className='section-title projects-title'>Projects</Typography>
      <Typography variant='h6' align='center' className='bolder-text'>What I have done?</Typography>

      <Grid container spacing={2}>
        <Grid item xs={1} md={2} lg={3}>
          <div className="project-container project-1">
            <div className="project-box">
              <div className="project-link-box">
                <Button className='portfolio-button' variant="contained"><small>Live Site</small></Button>
                <Button className='portfolio-button' variant="contained"><small>View Code</small></Button>
              </div>
            </div>
          </div>
          <div className="project-short">
            <Typography variant='subtitle2' mb={1} className='bolder-text'>World Leading University</Typography>
            <Button variant="contained" disabled className='portfolio-tag' sx={{fontSize:'10px',marginRight:'3px'}}>Creative</Button>
            <Button variant="contained" disabled className='portfolio-tag' sx={{fontSize:'10px',marginRight:'3px'}}>Education</Button>
            <Button variant="contained" disabled className='portfolio-tag' sx={{fontSize:'10px',marginRight:'3px'}}>Agency</Button>
            <Typography variant='h6' mt={1} mb={1} className='bolder-text'>Technologies:</Typography>
            <Button variant="outlined" disabled className='portfolio-tag' sx={{fontSize:'10px',marginRight:'3px'}}>ReactJS</Button>
            <Button variant="outlined" disabled className='portfolio-tag' sx={{fontSize:'10px',marginRight:'3px'}}>ReactBootstrap</Button>
            <Button variant="outlined" disabled className='portfolio-tag' sx={{fontSize:'10px',marginRight:'3px'}}>CSS</Button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Projects;