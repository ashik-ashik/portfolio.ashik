import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loader from '../Loader/Loader';
import "./SingleBlogTemplate.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const SingleBlogTemplate = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  useEffect(()=>{
    axios.get(`https://personal-server-22.vercel.app/blog/${id}`)
    .then(res => setBlog(res.data))
  },[id]);
  console.log(blog);
  if(!blog){
    return <Loader />
  }
  return (
    <>
      <Box id="single-blog-template">
        <Typography variant="h4">{blog?.title}</Typography>
        <div className="blog-content-items"
                  dangerouslySetInnerHTML={{
                    __html: blog?.content
                  }}
                />
      </Box>
      <Box sx={{mt:'30px', }}>
        <Button variant='contained' onClick={() => navigate("/all-blogs")}><KeyboardBackspaceIcon style={{marginRight:"10px"}} /> Back</Button>
      </Box>
    </>
  );
};

export default SingleBlogTemplate;