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
          <Typography paragraph>
          Hey!! <br />
          I am Md. Ashik Ali from Bangladesh. I always like to design something new to cope up with the world. My new ideas show me, how to be professional and to much originative. Proper activity in a work is important. That's why I always try to give more attention to my work.
          </Typography>
            <Button variant="contained" href="./" download={true} endIcon={<CloudDownloadIcon/>} className='portfolio-button'>Download Resume </Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;