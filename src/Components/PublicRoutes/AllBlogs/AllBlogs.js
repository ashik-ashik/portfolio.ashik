import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import Types from 'react-skillbars';
import { error, loadBlogs } from '../../../app/actionCreators/actionCreators';
import toast from '../../../app/toast/toast';
import { useData } from '../../../context/ContextProvider';
import Loader from '../../Common/Loader/Loader';
import PublicBlogCard from '../../Common/PublicBlogCard/PublicBlogCard';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';


const AllBlogs = () => {
  const {state, dispatch}= useData();
  useEffect(()=>{
    axios.get("https://personal-server-22.vercel.app/blogs")
    .then(res=> dispatch(loadBlogs(res.data)))
    .catch(err => {
      dispatch(error({message:err.message, code: err.response.status}))
    })
  },[dispatch]);
  if(state.isLoading){
    return <Loader />
  }
  if(state.isError){
    toast("danger","Error", state.error.message)
  }
  return (
    <article>
     {state.blogs?.length ? <Grid container spacing={{ xs: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          state.blogs?.map((blog, i) => <PublicBlogCard key={i} blog={blog} />)
        }
      </Grid> : 
      <Typography variant='h5'>There is no blog available!</Typography>
      }

      <Box sx={{p:"40px 10px"}}>
        <Link style={{textDecoration:"none"}} to="/#home-blogs">
          <Button variant='contained'>
            <KeyboardBackspaceIcon style={{marginRight:"10px"}} /> Back To Home
          </Button>
        </Link>
      </Box>
    </article>
  );
};

export default AllBlogs;