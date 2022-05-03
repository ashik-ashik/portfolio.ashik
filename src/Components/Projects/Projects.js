import { Typography } from '@mui/material';
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id='projects'>
      <Typography variant="h3" className='section-title projects-title'>Projects</Typography>
      <Typography variant='h6' align='center' className='bolder-text'>What I have done?</Typography>
    </section>
  );
};

export default Projects;