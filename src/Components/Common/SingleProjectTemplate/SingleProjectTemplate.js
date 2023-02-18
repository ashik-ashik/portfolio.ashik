import { Box, Grid, Typography } from '@mui/material';
import { spacing } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { error } from '../../../app/actionCreators/actionCreators';
import toast from '../../../app/toast/toast';
import { useData } from '../../../context/ContextProvider';
import Loader from '../Loader/Loader';
import "./SingleProjectTemplate.css";

const SingleProjectTemplate = () => {
  const {id}= useParams();
  const [project, setProject] = useState(null);
  const {state, dispatch} = useData();

  useEffect(()=>{
    axios.get(`http://localhost:5500/project/${id}`)
    .then(res => {
      console.log(res);
      if(res.status === 200) {
        setProject(res.data || [])
      } else{ 
        setProject([])
        dispatch(error({code: res.status, message: res.message}));
      }
    })
    .catch(err => {
      dispatch(error({code: err.response.status, message: err.message}));
      toast('danger', 'Error ' + err.response.status, err.message);
    })
  },[id, dispatch]);

  const errStyle ={
    padding:"50px 20px",
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column"
  }

  console.log(project, state);
  if(!project && !state.isError){
    return <Loader />
  }
  const linkName = ["Live View", "Frontend", "Backend"];
  return (
    <section>
        {
          state.isError && <Box style={errStyle}>
            <Typography variant="h3">{state.error.code}</Typography>
            <Typography >{state.error.message}</Typography>
          </Box>
        }
        <Box sx={{p:'20px 0px', width:"100%"}}>
          <Typography variant="h4" >{project?.name}</Typography>
          <div className='project-content' dangerouslySetInnerHTML={{__html: project?.content}} />
          <Box sx={{mt:'20px'}}>
            <Typography variant="h5" sx={{mb:"10px"}}>Project Links:</Typography>
            {
              project?.liveLinks?.map((link, i) => <Typography key={i} variant="h6" sx={{fontWeight:"bold"}}>
                {linkName[i]}: <a className='project-link' href={link} target="_blank" rel="noopener noreferrer">{linkName[i]}</a>
              </Typography>)
            }
          </Box>
          <Grid container spacing={3} sx={{mt:"20px"}}>
            <Grid item sx={12} md={6} lg={6}>
              <Typography variant="h5">Technologies:</Typography>
              {
                project?.techs?.split(",")?.map((item, i) => <span className='tag-tech-buttons' key={i}>{item?.trimStart()}</span>)
              }
            </Grid>
            <Grid item sx={12} md={6} lg={6}>
              <Typography variant="h5">Tags:</Typography>
              {
                project?.tags?.split(",")?.map((item, i) => <span className='tag-tech-buttons' key={i}>{item?.trimStart()}</span>)
              }
            </Grid>
          </Grid>
          <Box sx={{mt:"15px"}}>
            <img src={project?.img} alt={project?.name} />
          </Box>
        </Box>
    </section>
  );
};

export default SingleProjectTemplate;