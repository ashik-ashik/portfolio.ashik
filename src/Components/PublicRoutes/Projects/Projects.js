import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import "swiper/css/bundle";
import axios from 'axios';
import { Link } from 'react-router-dom';


const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(()=>{
    axios.get("http://localhost:5500/projects")
    .then(res => setProjects(res.data))
    .catch(err => {
      
    })

  },[]);

  const btnStyle = {
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    margin: "30px 0",
    
  }
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
                project?.tags?.split(",")?.map((tag, index) => <Button key={index} variant="contained" disabled className='portfolio-tag' >
                  {tag}
                </Button>)
              }
              <Typography variant='h6' mt={1} mb={1} className='bolder-text'>Technologies:</Typography>
              {
                project?.techs?.split(",")?.map((tech, index) => <Button key={index} variant="outlined" disabled className='portfolio-tag'>
                  {tech}
                </Button>)
              }
              <Divider style={{margin:"10px 0", background:"var(--primary-color)"}}/>
              <Box>
                <Link to={`/view_project/${project._id}`} style={{textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}>
                  <Button variant='contained' sx={{width:"100%"}}>View Detail</Button>
                </Link>
              </Box>
              
            </div>
            </SwiperSlide>
             )
          }
          
        </Swiper>
      </Box>
      <Box style={btnStyle}>
        <Link to="/all-projects" style={{textDecoration:"none"}}>
          <Button variant="contained" color="secondary">All Projects</Button>
        </Link>
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