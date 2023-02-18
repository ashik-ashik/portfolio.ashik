import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from '../../../../app/toast/toast';
import { useNavigate } from 'react-router';
import { useData } from '../../../../context/ContextProvider';
import { addProject } from '../../../../app/actionCreators/actionCreators';
import { Link } from 'react-router-dom';
import "../Projects.css";

const AddProject = () => {
  const {dispatch} = useData();
  const navigate = useNavigate();
  const {handleSubmit, register, watch, setValue} = useForm();
  const [description, setDescription] = useState('');
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
  
  const imageBBAPI = process.env.REACT_APP_imagebbKey;
  const handleFormData = data => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageBBAPI}`, {
        method: "POST",
        body: formData
      })
      .then(res => res.json())
      .then(result => {
        const projectData = {
          name: data.name,
          img: result.data.url,
          content: description,
          publishDate: new Date().toLocaleDateString(),
          tags: data.tags,
          techs: data.techs,
          liveLinks: [data.live, data.frontend, data.backend]
        }
        if (result.success) {
          axios.post("http://localhost:5500/add-project", projectData).then(res => {
            if (res.status === 200) {
              dispatch(addProject(projectData))
              toast("success", "Success", "Your Blog is Live Now!");
              navigate("/panel/projects");
            }
          })
        } else {
          toast("danger", "Error", "Something Want Wrong! Try again latter.");
        }
      })
  };

  
  return (
    <div>
      <Typography variant='h4' sx={{fontWeight:"bold", mt:"20px"}}>Add New Project:</Typography>

        <form onSubmit={handleSubmit(handleFormData)} className="project-form">
          <Box sx={{mt:"20px", mb:'20px'}}>
            <TextField  className="text-field" {...register("name", {required:true})} label="Project Title" variant="standard" />
            <TextField  className="text-field" {...register("tags", {required:true})} label="Tags" variant="standard" />
            <TextField  className="text-field" {...register("techs", {required:true})} label="Technologies" variant="standard" />
            <TextField  className="text-field" {...register("img", {required:true})} type="file" variant="standard" />
            <TextField  className="text-field" {...register("live", {required:true})} label="Live Link" variant="standard" type="url" />
            <TextField  className="text-field" {...register("frontend", {required:true})} label="Frontend Link" variant="standard" type="url" />
            <TextField  className="text-field" {...register("backend")} label="Backend Link" variant="standard" type="url" />
            <Typography >Project Content:</Typography>
            <ReactQuill modules={modules} theme="snow" value={description} onChange={setDescription} />
          </Box>
          <Box className='form-buttons'>
          <Button type="submit" variant='contained'>Add Project</Button>
          <Link style={{textDecoration:"none"}} to="/panel/projects"><Button variant='contained'>Cancle</Button></Link>
        </Box>
        </form>
    </div>
  );
};

export default AddProject;