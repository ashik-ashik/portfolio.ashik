import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import "./PublicProjectCard.css";

const PublicProjectCard = ({project}) => {
  const navigate = useNavigate();
  const techStyle ={
    display:"inline-block",
    padding:"3px 12px",
    border:"1px solid var(--matching-color)",
    marginRight:"5px",
    marginTop:"4px",
    borderRadius:"3px",
    fontSize:"11px",
    fontWeight:"600"
  };
  return (
    <Grid item sx={12} md={4} lg={3}>
      <Card className='public-project-card'>
        <CardMedia
          sx={{ height: 140 }}
          image={project.img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" sx={{fontWeight:"bold"}} component="div">
            {project?.name}
          </Typography>
          <Box>
            <Typography variant='subtitle1'>Technologies:</Typography>
            {
              project?.techs?.split(",")?.map((tech, i) => <span key={i} style={techStyle}>{tech.trimStart()}</span>)
            }
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button size="small" className='action-btn' onClick={()=> navigate(`/view_project/${project._id}`)}>Details</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PublicProjectCard;