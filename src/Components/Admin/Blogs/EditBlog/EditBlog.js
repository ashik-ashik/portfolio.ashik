import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { error } from '../../../../app/actionCreators/actionCreators';
import toast from '../../../../app/toast/toast';
import { useData } from '../../../../context/ContextProvider';
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
  
  const {state, dispatch} = useData();
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
      setData({});
      setContent(null);
      console.log(err)
      dispatch(error({code:err.response.status, message:err.message}))
      toast("danger", "Error", err.message);
    })

  },[id, dispatch])
    
  const title = watch('title');

  const handleUpdateBlog = () => {
    axios.put(`https://personal-server-22.vercel.app/update_blog/${id}`, {
          title: title,
          content: blogContent,
        }).then(res => {
          if(res.status === 200) {
            toast("success", "Success", "Your Blog have been updated!");
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
      {
        state.isError && <Box sx={{textAlign:"center"}}>
          <Typography variant='h3' sx={{fontWeight:"bold"}}>{state.error.code}</Typography>
          <Typography variant='body2' sx={{mt:"15px"}}>Te content is not available right now!</Typography>
        </Box>
      }
      {!state.isError && <>
        <form onSubmit={handleSubmit(handleUpdateBlog)}>
          <Box sx={{mb:"15px"}}>
              <TextField sx={{width:"100%"}} style={{color:"var(--matching-color)"}} {...register("title", {required:true})} label="Blog Title" variant="standard" />
          </Box>
        </form>
        <ReactQuill modules={modules} theme="snow" value={blogContent} onChange={setContent} />
      </>
      }
      <Box sx={{m:'20px', display:"flex", justifyContent:"space-between"}}>
        {!state.isError && <Button variant="contained" onClick={handleUpdateBlog} >Update Blog</Button>}
        <Link to="/panel/blogs" style={{textDecoration:"none"}}>
          <Button variant='contained'>{state.isError ? "Back" : "Cancel"}</Button>
        </Link>
      </Box>
    </div>
  );
};

export default EditBlog;