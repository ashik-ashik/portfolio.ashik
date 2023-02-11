import {
  Box,
  Button,
  TextField
} from '@mui/material';
import axios from 'axios';
import React, {
  useEffect,
  useState
} from 'react';
import {
  useForm
} from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  useNavigate
} from 'react-router';
import toast from '../../../../app/toast/toast';


const AddBlog = () => {
  const navigate = useNavigate();
  const [blogContent, setContent] = useState('');
  const modules = {
    toolbar: [
      [{
        'header': [1, 2, 3, 4, 5, 6, false]
      }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }, {
        'indent': '-1'
      }, {
        'indent': '+1'
      }],
      ['link', 'image', 'code-block'],
      ['clean'],
      [{
        'color': ['white', 'black', 'red', 'blue', 'green', "#ddd", "#ff8000", "#660000", "#ffbf00", "#0080ff", "#8000ff", '#bf00ff', '#8c7373', '#7300ff', '#006172', "#00612a", "#00b56b", "#97005e", '#ff4400', '#ccc']
      }],
    ],
  };


  const imageBBAPI = process.env.REACT_APP_imagebbKey;
  const {
    handleSubmit,
    register,
    watch
  } = useForm();
  const title = watch('title');
  const image = watch("image");

  const [img] = image || [];
  useEffect(() => {


  }, [img, imageBBAPI]);

  const publishedAT = new Date().toLocaleDateString();

  const handleBlogPost = () => {
    const formData = new FormData();
    formData.append("image", img);
    fetch(`https://api.imgbb.com/1/upload?key=${imageBBAPI}`, {
        method: "POST",
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          axios.post("https://personal-server-22.vercel.app/add_blog", {
            title: title,
            image: data.data.url,
            content: blogContent,
            publishDate: publishedAT,
          }).then(res => {
            if (res.status === 200) {
              toast("success", "Success", "Your Blog is Live Now!");
              navigate("/panel/blogs");
            }
          })
        } else {
          toast("danger", "Error", "Something Want Wrong! Try again latter.");
        }
      })


  }
  return ( 
  <div >
    <h3 className = "text-2xl" > Add New Blog </h3>
    <form onSubmit = {handleSubmit(handleBlogPost)} >
    <Box sx = {
      {
        mb: "15px"
      }
    } >
    <TextField sx = {
      {
        width: "100%"
      }
    } {
      ...register("title", {
        required: true
      })
    }
    label = "Blog Title"
    variant = "standard" />
    </Box>
    <Box sx = {
      {
        mb: "15px"
      }
    } >
    <TextField {
      ...register("image", {
        required: true
      })
    }
    type = "file"
    label = "Blog Title"
    variant = "standard" />
    </Box>
    </form >
    <ReactQuill modules = {
      modules
    }
    theme = "snow"
    value = {
      blogContent
    }
    onChange = {
      setContent
    }
    />
    <Box sx = {
      {
        mt: '20px'
      }
    } >
    <Button variant = "contained"
    onClick = {
      handleBlogPost
    } > Publish Blog </Button> </Box > </div>
  );
};

export default AddBlog;