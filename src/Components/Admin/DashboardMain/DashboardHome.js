import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useData } from '../../../context/ContextProvider';
import Loader from '../../Common/Loader/Loader';
import "./dashboard.css";

const DashboardHome = () => {
  const {state} = useData();
  if(state.isloading){
    return <Loader ></Loader>
  }
  return (
    <section className='dashboard'>
      <h2 className="text-3xl">Dashboard</h2>
      <Box sx={{p:"40px 0"}}>
        <Grid container spacing={3}>
          <Grid item sx={12} md={4} lg={3}>
            <Box sx={{p:"30px"}} className="dashboard-item">
                <Typography variant='h5'>Users</Typography>
                <Typography variant='h3' sx={{mt:2}}>{state?.users?.length}</Typography>
            </Box>
          </Grid>
          <Grid item sx={12} md={4} lg={3}>
            <Box sx={{p:"30px"}} className="dashboard-item">
                <Typography variant='h5'>Projects</Typography>
                <Typography variant='h3' sx={{mt:2}}>{state?.projects?.length}</Typography>
            </Box>
          </Grid>
          <Grid item sx={12} md={4} lg={3}>
            <Box sx={{p:"30px"}} className="dashboard-item">
                <Typography variant='h5'>Blogs</Typography>
                <Typography variant='h3' sx={{mt:2}}>{state?.blogs?.length}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default DashboardHome;