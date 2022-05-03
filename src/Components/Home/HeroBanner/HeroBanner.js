import { Container, Typography, Grid } from '@mui/material';
import React , {useState} from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  const titles = ['Web Designer', 'UX/UI Designer', 'MERN Stack Developer', 'Web Developer'];
  const [curnIndex, setCurnIndex] = useState(0);
  const handleNext = () => {
    if(curnIndex < titles.length -1){
      setCurnIndex(curnIndex + 1);
    }else{
      setCurnIndex(0);
    }
  }
  setTimeout(handleNext, 2000)
  return (
    <>
      <section id='home' className='hero-section'>
        <Container>
          <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
              <div item xs={12} md={6} className="py-100 text-white">
                <Typography variant="subtitle1" gutterBottom>WELCOME TO MY WORLD</Typography>
                <Typography variant="h3" gutterBottom className='bold-text title-name'>Hi, I’m Ashik Ali</Typography>
                <Typography variant="h4" className='titles bolder-text' gutterBottom>
                  {titles[curnIndex]}
                  </Typography>
                <Typography variant="h4" className='bold-text title-base' >based in Bangladesh.</Typography>
              </div>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <img src="https://i.postimg.cc/BnVXzBNg/pash-blue-removebg-preview-1.png
" alt="" /> */}
              </Grid>
          </Grid>
          
        </Container>
      </section>
    </>
  );
};

export default HeroBanner;