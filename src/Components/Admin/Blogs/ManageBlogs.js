import { Box, Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Link } from 'react-router-dom';
import { useData } from '../../../context/ContextProvider';
import axios from 'axios';
import { error, loadBlogs } from '../../../app/actionCreators/actionCreators';
import toast from '../../../app/toast/toast';
import BlogCard from './BlogCard';
import "./manageBlogs.css";
import Loader from '../../Common/Loader/Loader';


const ManageBlogs = () => {
  const {state, dispatch} = useData();
  useEffect(()=> {
    axios
      .get('https://personal-server-22.vercel.app/blogs')
      .then(response => {
        if(response.status===200){
          dispatch(loadBlogs(response.data || []))
        };
      })
      .catch(err => {
        console.log({...err.response});
        dispatch(error({code: err.response.status, message: err.message}));

      });
      if(state.isError){
        toast("danger","Error", state.error.message)
      }
  }, [ state.isError, state.error.message, dispatch]);

  if(state.isLoading){
    return <Loader />
  }
  return (
    <div className='manage-blogs'>
      <h3 className="text-2xl">Manage Blogs</h3>

      {
        state.isError
      }

      <Grid container spacing={3}>
        {
          state?.blogs?.length > 0 && state?.blogs?.map((blog, i) => <BlogCard key={i} blog={blog} />)
        }
      </Grid>

      <Box sx={{mt:"20px"}}>
        <Link to="/panel/add-new-blog" style={{ textDecoration: 'none' }}>
          <Button variant="contained" startIcon={<ControlPointIcon sx={{color:"#fff"}} />}>
            Add New Blog
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default ManageBlogs;