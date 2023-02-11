import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import './About.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const About = () => {
  return (
    <section id='about'>
      <Grid container spacing={1} alignItems='center'>
        <Grid item md={5}>
          <img className='about-thumb' src="https://i.postimg.cc/65z7rXvF/istockphoto-1286228792-170667a-removebg-preview-f409da900010fede4558.png" alt="" />
        </Grid>
        <Grid item md={7}>
          <Typography variant='h4' className='bolder-text'>
            About Md Ashik Ali
          </Typography>
          <Typography variant='h6' className='bold-text highlighted-title'>
            Web Developer and Designer
          </Typography>
          <Typography paragraph className='about-me-text'>
          Hey!! <br />
          I am Md. Ashik Ali from Bangladesh. As a React frontend developer, I am someone who specializes in building user interfaces for web applications using the React framework, a popular JavaScript library. I am responsible for creating responsive, interactive, and visually appealing components that enhance the user experience. I have a strong understanding of HTML, CSS, and JavaScript, and use them to bring designs to life. I am always keeping up with the latest trends and technology in the frontend development world to ensure that the projects I work on are modern, efficient, and of the highest quality. Overall, my goal is to deliver high-quality, performant, and accessible web applications that provide a seamless user experience.
          </Typography>
            <Button variant="contained" href="../../files/Md_Ashik_Ali_Resume.pdf" download={true} endIcon={<CloudDownloadIcon/>} className='portfolio-button'>Download Resume </Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;