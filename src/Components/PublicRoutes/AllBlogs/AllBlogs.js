import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { error, loadBlogs } from '../../../app/actionCreators/actionCreators';
import toast from '../../../app/toast/toast';
import { useData } from '../../../context/ContextProvider';
import Loader from '../../Common/Loader/Loader';
import PublicBlogCard from '../../Common/PublicBlogCard/PublicBlogCard';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import "./AllBlogs.css";

const AllBlogs = () => {
  const {state, dispatch}= useData();
  useEffect(()=>{
    axios.get("https://personal-server-22-h7arc3im7-ashikfree999.vercel.app/blogs")
    .then(res=> {
      dispatch(loadBlogs(res.data));
      console.log(res)
    })
    .catch(err => {
      dispatch(error({message:err.message, code: err.response.status}))
    })
  },[dispatch]);
  console.log(state)
  if(state.isLoading){
    return <Loader />
  }
  if(state.isError){
    toast("danger","Error", state.error.message)
  }
  return (
    <article>
      <section className="all-blogs-banner">
          {
            state.isError ? <>
              <div className="error">
                <h2>{state.error.code}</h2>
                <h3>{state.error.message}</h3>
                <h6>OPPS! There is some thing wrong. Blogs could not load.</h6>
              </div>
            </>: <>
              <h2>All <br /> Blogs</h2>
            </>
          }
      </section>
      <Box component="section" className='all-blogs'>
        {state.blogs?.length > 0 && <Grid container spacing={{ xs: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            state.blogs?.map((blog, i) => <PublicBlogCard key={i} blog={blog} />)
          }
        </Grid> 
        }
        {
          (!state.isError && !state.blogs?.length) && <Typography variant='h5' style={{textAlign:"center", padding:"50px 10px"}}>There is no blog available!</Typography>
        }
        <Box sx={{p:"40px 10px"}}>
          <Link style={{textDecoration:"none"}} to="/#home-blogs">
            <Button variant='contained'>
              <KeyboardBackspaceIcon style={{marginRight:"10px"}} /> Back To Home
            </Button>
          </Link>
        </Box>
      </Box>

    </article>
  );
};

export default AllBlogs;