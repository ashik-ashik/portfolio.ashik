import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./BlogCard.css";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useData } from '../../../context/ContextProvider';
import { deleteBlog, error } from '../../../app/actionCreators/actionCreators';
import DeletePopup from '../../Common/DeletePopUp/DeletePopUp';
import toast from '../../../app/toast/toast';

const BlogCard = ({blog}) => {
  const {dispatch} = useData();
  const [open, setOpen] = useState(false);
  const [agreement, setAgreement] = useState({});

  const navigate = useNavigate();
  const redirectEdit = id => {
    navigate(`/panel/edit-blog/${id}`)
  };

 
  const handleDeleteBlogOne = id => {
    setOpen(true);
    setAgreement({id: id, agree: false});
  }
  if(agreement.agree){
    axios.delete(`https://personal-server-22.vercel.app/delete-blog/${agreement.id}`)
    .then(res => {
      if(res.status === 200){
        setAgreement({id: null, agree: false});
        toast("warning", "Delete Blog", "Blog has been deleted")
        dispatch(deleteBlog(agreement.id));
      }
    })
    .catch(err => {
      dispatch(error({code: err.response.status, message: err.message}))
    })
  }
  return (
    <>
      {
        open && <DeletePopup open={open} setOpen={setOpen} setAgreement={setAgreement} id={blog?._id} />
      }
      <Grid item xs={12} md={4} lg={3} className="blog-card-item">
      <Card className='blog-card'>
        <CardMedia
          component="img"
          height="140"
          image={blog?.image}
          alt="green iguana"
        />
        <CardContent className='blog-content'>
          <Typography gutterBottom variant="body2" style={{fontWeight:"bold"}} component="div">
            {blog?.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6" sx={{fontSize:"12px"}}>
            {blog?.publishDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <div
            dangerouslySetInnerHTML={{
              __html: blog?.content?.substr(0, 80)
            }}
          />
          </Typography>
        </CardContent>
        <Divider />
        <CardActions  className='blog-content'>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button size="small" style={{width:"100%"}} variant='contained' onClick={() =>redirectEdit(blog?._id)}><EditIcon /></Button>
            </Grid>
            <Grid item xs={6}>
              <Button size="small" style={{width:"100%"}} onClick={()=> handleDeleteBlogOne(blog?._id)} variant='contained' color="error"><DeleteIcon /></Button>
            </Grid>
          </Grid>
      </CardActions>
    </Card>
      </Grid>
    </>
  );
};

export default BlogCard;