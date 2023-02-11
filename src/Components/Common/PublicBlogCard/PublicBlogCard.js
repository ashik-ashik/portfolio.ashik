import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./PublicBlogCard.css";

const PublicBlogCard = ({blog}) => {
  return (
    <Grid item xs={6} sm={6} md={3}>
            <Card className='blog-card'>
              <CardHeader as={Link} to={`/blog/${blog?._id}`} sx={{textDecoration:"none"}}
                avatar={
                  <Avatar sx={{ bgcolor: "darkred" }} aria-label="recipe">
                    B
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                title={blog?.title}
                subheader={blog?.publishDate}
                className="blog-header-text"
              />
              <Link  to={`/blog/${blog?._id}`}>
                <CardMedia 
                  component="img"
                  height="194"
                  image={blog?.image}
                  alt={blog?.title}
                />
              </Link>
              <CardContent className='blog-body'>
                <Typography variant="body2" className="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog?.content.substr(0, 60)
                  }}
                ></div>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  {/* <FavoriteIcon /> */}
                </IconButton>
                
              </CardActions>
              
            </Card>
          </Grid>
  );
};

export default PublicBlogCard;