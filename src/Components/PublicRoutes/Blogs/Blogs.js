import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Grid } from '@mui/material';
import './Blogs.css'
import { useData } from '../../../context/ContextProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { loadBlogs } from '../../../app/actionCreators/actionCreators';
import PublicBlogCard from '../../Common/PublicBlogCard/PublicBlogCard';


const Blogs = () => {
  const {state, dispatch} = useData();
  React.useEffect(()=>{
    axios.get("https://personal-server-22.vercel.app/loadBlogs")
    .then(res => dispatch(loadBlogs(res.data)))
  },[dispatch])
  return (
    <section id='home-blogs' >
      <Typography variant='h3' className='borader-text section-title blogs-title'>
        Blogs
      </Typography>
      <Grid container spacing={{ xs: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
        state?.blogs?.map((blog, index) => <PublicBlogCard key={index} blog={blog} />)
        }
      </Grid>

      <Box sx={{mt:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Link to="all-blogs" style={{textDecoration:"none"}}>
          <Button variant="contained" color="secondary">More Blogs</Button>
        </Link>
      </Box>

    </section>
  );
};

export default Blogs;