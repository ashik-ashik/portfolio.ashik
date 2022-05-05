import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import './BeFriend.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const BeFriend = () => {
    // socialvimeo Media
    const socialMedias = [
      {name:'Facebook', profileUrl:'https://facebook.com/ashik.ali0', icon:<FacebookIcon/>},
      {name:'LinkedIn', profileUrl:'https://linkedin.com/in/md-ashik-ali', icon:<LinkedInIcon/>},
      {name:'Twitter', profileUrl:'https://twitter.com/md_ashik_ali', icon:<TwitterIcon/>},
      {name:'GitHub', profileUrl:'https://github.com/ashik-ashik', icon:<GitHubIcon/>},
      {name:'StackOverflow', profileUrl:'https://facebook.com/ashik.ali0', icon:<i className='bx bxl-stack-overflow' ></i>},
      {name:'Dribble', profileUrl:'https://facebook.com/ashik.ali0', icon:<i className='bx bxl-dribbble'></i>},
      {name:'Vimeo', profileUrl:'https://facebook.com/ashik.ali0', icon:<i className='bx bxl-vimeo' ></i>},
      {name:'Instagram', profileUrl:'https://instagram.com/md_ashik_ali_khan', icon:<InstagramIcon/>},
    ];
  return (
    <Box component='section' id='be-friend'>
      <Typography variant='h5' className='section-title'>Let's Connect</Typography>
      <Grid container spacing={2}>
        {
          socialMedias.map(media => <Grid item key={media.name} xs={12} md={4} lg={3}>
            <a href={media.profileUrl} target="_blank" rel="noopener noreferrer">
            <Paper className='social-media-box'>
              <Box className='icon-box'>
                {media.icon}
              </Box>
              <Box className='detail-box'>
                <Typography variant='h6'>{media.name}</Typography>
                <Typography paragraph className='follow-me' mb={0}>Let's Connect at {media.name}</Typography>
              </Box>
            </Paper>
            </a>
          </Grid>)
        }
      </Grid>
    </Box>
  );
};

export default BeFriend;