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
import "../Projects.css";

const EditProject = () => {
  const {state, dispatch} = useData();
  const navigate = useNavigate();
  const {handleSubmit, register, watch, setValue} = useForm();
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
  const [project, setProject] = useState(null);
  useEffect(()=>{
    axios.get(`http://localhost:5500/project/${id}`)
    .then(res => {
      setProject(res.data);
    })
    .catch(err => {
      dispatch(error({code: err.request.status, message: err.message}))
      toast("danger", "Error: " + err.request.status, err.message)
    })
  },[id]);
  const [description, setDescription] = useState('');
  useEffect(()=> {
    setDescription(project?.content)
  }, [project])

  const handleFormData = data => {
    const updatedData = {
      name: data.name,
      tags: data.tags,
      techs: data.techs,
      liveLinks: [data.live, data.frontend, data.backend],
      content: description

    }
    axios.put(`http://localhost:5500/project/${project._id}`, updatedData)
    .then(res => {
      if(res.status === 200){
        toast("success", "Updated!", "The project has been updated!");
        navigate("/panel/projects");
      }
    }).catch(err => {
      toast("danger", "Failed!", err.message)
    })
  }
const links = ["live","frontend", "backend"];
useEffect(()=> {
  setValue("name", project?.name);
  setValue("tags", project?.tags);
  setValue("techs", project?.techs);
  links.map((item, i)=> setValue(item, project?.liveLinks[i]))
}, [project])

  if(!project && !state.isError){
    return <Loader />
  }
  
  return (
    <>
      <Typography variant='h4' sx={{fontWeight:"bold", mt:"20px"}}>Edit Project:</Typography>

      <form onSubmit={handleSubmit(handleFormData)} className="project-form">
        <Box sx={{mt:"20px", mb:'20px'}}>
          <TextField className="text-field" {...register("name", {required:true})} label="Project Title" variant="standard" />
          <TextField className="text-field" {...register("tags", {required:true})} label="Tags" variant="standard" />
          <TextField className="text-field" {...register("techs", {required:true})} label="Technologies" variant="standard" />
          <TextField className="text-field" {...register("live", {required:true})} label="Live Link" variant="standard" type="url" />
          <TextField className="text-field" {...register("frontend", {required:true})} label="Frontend Link" variant="standard" type="url" />
          <TextField className="text-field" {...register("backend")} label="Backend Link" variant="standard" type="url" />
          <Typography sx={{mt:"12px", mb:"10px"}}>Project Content:</Typography>
          <ReactQuill modules={modules} theme="snow" value={description} onChange={setDescription} />
        </Box>
        <Box className='form-buttons'>
          <Button type="submit" variant='contained'>Update Project</Button>
          <Link to="/panel/projects"  style={{textDecoration:"none"}}><Button variant='contained'>Cancle</Button></Link>
        </Box>
      </form>
    </>
  );
};

export default EditProject;