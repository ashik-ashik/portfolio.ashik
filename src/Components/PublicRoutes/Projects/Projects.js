import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import "swiper/css/bundle";


const Projects = () => {
  const projects = [
    {
      name:'ABC University', 
      tags:['User Manage','Creative','Agency'], 
      techs:['ReactJS','NodeJS','MongoDB', 'ReactBootstrap',"Google Firebase", 'jodIt', 'EmailJs'],
      img:'https://i.postimg.cc/tTxTYkgH/user-Management.png', 
      liveLinks:['https://social-work-at-pust.web.app/','https://github.com/ashik-ashik/pust-sw-client','https://github.com/ashik-ashik/pust-sw-server']
    },
    {
      name:'Wonder By-Cycle Shop', 
      tags:['Ecommerce','Shop','Agency'], 
      techs:['ReactJS','NodeJS','MongoDB', 'Material UI',"Google Firebase"],
      img:'https://i.postimg.cc/VLL8bwWg/by-cycke.png', 
      liveLinks:['https://bi-bike-online-store.web.app/','https://github.com/ashik-ashik/by-cycle','https://github.com/ashik-ashik/by-cycle-server']
    },
    {
      name:'Cool Shop', 
      tags:['E-Commerce','Shop','E-Market'], 
      techs:['HTML5','CSS3', 'Vanila JS', 'jQuery', 'AOS Animation'],
      img:'https://i.postimg.cc/TYrgwp6y/cool-shop.png', 
      liveLinks:['https://ashik-ashik.github.io/cool-shop/', 'https://github.com/ashik-ashik/cool-shop']
    },
    {
      name:'Learn Online', 
      tags:['E-Learning','Creative','Landing Page', 'Agency'], 
      techs:['HTML5','SASS','CSS3', 'Vanila JS'],
      img:'https://i.postimg.cc/yNw8cyh7/e-learning-min.png', 
      liveLinks:['https://ashik-ashik.github.io/online-education/', 'https://github.com/ashik-ashik/online-education']
    },
    {
      name:'World Leading University', 
      tags:['Creative','Education','Agency'], 
      techs:['ReactJS','ReactBootstrap','CSS'], 
      img:'https://i.postimg.cc/D0CmSj6F/world-leading-uv-home.png', 
      liveLinks:['https://world-leading-university.netlify.app/','https://github.com/ashik-ashik/world-leading-university']
    },
  ]
  return (
    <section id='projects'>
      <Typography variant="h3" className='section-title projects-title'>Projects</Typography>
      <Typography variant='h6' align='center' className='bolder-text'>What I have done?</Typography>

 
      <Box>
      <Swiper 
          modules={[ Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={1}
          navigation
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          // loop={true}
          pagination={{type: "progressbar", clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            projects?.map((project, index) => <SwiperSlide key={index}>
            <div className="project-container project-1" style={{background:`url(${project?.img})`}}>
              <div className="project-box">
                <div className="project-link-box">
                  {
                    project?.liveLinks?.map((link, index)=><Button key={index} href={link} rel="noopener noreferrer" target='_blank' className='portfolio-button' variant="contained"><small>
                      {['Visit Site', 'Client Code', 'Server Code'][index]}
                    </small></Button> )
                  }
                  
                </div>
              </div>
            </div>
            <div className="project-short">
              <Typography variant='subtitle2' mb={1} className='bolder-text'>{project?.name}</Typography>
              {
                project?.tags?.map((tag, index) => <Button key={index} variant="contained" disabled className='portfolio-tag' >
                  {tag}
                </Button>)
              }
              <Typography variant='h6' mt={1} mb={1} className='bolder-text'>Technologies:</Typography>
              {
                project?.techs?.map((tech, index) => <Button key={index} variant="outlined" disabled className='portfolio-tag'>
                  {tech}
                </Button>)
              }
              
            </div>
            </SwiperSlide>
             )
          }
          
        </Swiper>
      </Box>
    </section>
  );
};

export default Projects;


{/* <Grid container spacing={2}>
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
      </Grid> */}