import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router';
import toast from '../../../../app/toast/toast';
import Loader from '../../../Common/Loader/Loader';

const EditBlog = () => {
  const {handleSubmit, register, watch, setValue} = useForm();
  const [blogContent, setContent] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'code-block'],
      ['clean'],
      [{ 'color': ['white', 'black', 'red', 'blue', 'green', "#ddd", "#ff8000", "#660000", "#ffbf00", "#0080ff", "#8000ff", '#bf00ff', '#8c7373', '#7300ff', '#006172', "#00612a","#00b56b","#97005e",'#ff4400','#ccc'] }],
    ],
  };
  
  const {id} = useParams();
  const navigate = useNavigate();
  const [blogData, setData] = useState(null);
  useEffect(()=>{
    axios.get(`https://personal-server-22.vercel.app/blog/${id}`)
    .then(res => {
      if(res.status === 200){
        setContent(res.data.content);
        setData(res.data)
      }
    }).catch(err=>{
      setData({})
      toast("danger", "Error", err.message)
    })

  },[id])
    
  const title = watch('title');

  const handleUpdateBlog = () => {
    axios.put(`https://personal-server-22.vercel.app/update_blog/${id}`, {
          title: title,
          content: blogContent,
        }).then(res => {
          if(res.status === 200) {
            toast("success", "Success", "Your Blog is Live Now!");
            navigate("/panel/blogs");
          }
        }).catch(err=> {
          toast("danger","Error", err.message)
        })

    
  };

 useEffect(()=>{
  setValue('title', blogData?.title);
 },[blogData, setValue])

 if(!blogData){
  return <Loader />
 }

  return (
    <div>
      <h3 className="text-2xl">Edit Blog--{id}</h3>
      <form onSubmit={handleSubmit(handleUpdateBlog)}>
        <Box sx={{mb:"15px"}}>
            <TextField sx={{width:"100%"}} {...register("title", {required:true})} label="Blog Title" variant="standard" />
        </Box>
      </form>
      <ReactQuill modules={modules} theme="snow" value={blogContent} onChange={setContent} />
      <Box sx={{mt:'20px'}}>
        <Button variant="contained" onClick={handleUpdateBlog} >Publish Blog</Button>
      </Box>
    </div>
  );
};

export default EditBlog;