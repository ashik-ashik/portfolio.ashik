import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { error, loadProjects } from '../../../app/actionCreators/actionCreators';
import toast from '../../../app/toast/toast';
import { useData } from '../../../context/ContextProvider';
import PublicProjectCard from '../../Common/PublicProjectCard/PublicProjectCard';
import "./AllProjects.css";

const AllProjects = () => {
  const {state, dispatch} = useData();
  useEffect(()=>{
    axios.get(`http://localhost:5500/projects`)
    .then(res => dispatch(loadProjects(res.data || [])))
    .catch(err => {
      dispatch(error({code:err.response.status, message: err.message}));
    })
  },[dispatch]);
  if(state.isError){
    toast('danger', "ERROR " + state.error.code, state.error.message)
  }

  return (
    <section>
      <div className="all-projects-banner">
        {
          state.isError ? <div className='error'>
            <Typography variant="h3">{state.error.code}</Typography>
            <Typography variant="h5">{state.error.message}</Typography>
            <Typography variant="h6" sx={{fontSize:"12px"}}>There is something wrong! Projects cannot be loaded.</Typography>
          </div> :  <>
            <h2>All <br />Projects</h2>
          </>
        }
      </div>
      <Box className='all-projects'>
          <Grid container spacing={1}>
            {
              state.projects?.map((project, i) => <PublicProjectCard key={i} project={project} />)
            }
          </Grid>
      </Box>
    </section>
  );
};

export default AllProjects;