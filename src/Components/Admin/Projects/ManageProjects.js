import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { error, loadProjects } from '../../../app/actionCreators/actionCreators';
import toast from '../../../app/toast/toast';
import { useData } from '../../../context/ContextProvider';
import ProjectCard from './ProjectCard/ProjectCard';

const ManageProjects = () => {
  const {state, dispatch} = useData();
  useEffect(()=>{
    axios.get("https://personal-server-22-h7arc3im7-ashikfree999.vercel.app/projects")
    .then(res => dispatch(loadProjects(res.data)))
    .catch(err => {
      dispatch(error({code: err.response?.status, message: err.message}));
      toast("danger", state.error.code + "Error", state.error.message)
    })
  },[dispatch, state.error.code, state.error.message])
  console.log(state)
  return (
    <section>
      <Typography variant="h4">Manage Projects:</Typography>
        <Box sx={{p:"30px 15px 15px"}}>
          <Link to="/panel/add-new-projects" style={{textDecoration:"none"}}>
            <Button variant="contained">Add New Project</Button>
          </Link>
        </Box>
        <Divider sx={{background:"var(--primary-color)"}} />
        <Grid container spacing={2} sx={{mt:"20px"}}>
          {
            state?.projects?.map((project, i)=> <ProjectCard key={i} project={project} />)
          }
        </Grid>
        
    </section>
  );
};

export default ManageProjects;