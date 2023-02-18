import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import "./projectCard.css";
import DeletePopup from '../../../Common/DeletePopUp/DeletePopUp';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useData } from '../../../../context/ContextProvider';
import { deleteProject } from '../../../../app/actionCreators/actionCreators';
import toast from '../../../../app/toast/toast';

const ProjectCard = ({project}) => {
  const techStyle ={
    display:"inline-block",
    padding:"3px 12px",
    border:"1px solid var(--primary-color)",
    marginRight:"5px",
    marginTop:"4px",
    borderRadius:"3px",
    fontSize:"11px",
    fontWeight:"600"
  };
  const {dispatch} = useData();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const handleDelete = id => {
    setOpen(true);
  }
  if(agree.agree){
    axios.delete(`http://localhost:5500/project/${agree.id}`)
    .then(res => {
      if(res.status === 200) {
        setAgree({agree:false, id: null})
        dispatch(deleteProject(agree.id));
        toast("warning", "Delete Project", "Project has been deleted")
      }
    })
  }
  return (
      <>
      {
        open && <DeletePopup open={open} setOpen={setOpen} setAgreement={setAgree} id={project._id} title={"Project"} />
      }
        <Grid item  md={4} lg={3} className="project-card-item">
          <Card className='project-card'>
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
              <Button size="small" className='action-btn' onClick={()=> navigate(`/panel/edit-project/${project._id}`)}>Edit</Button>
              <Button size="small" className='action-btn' onClick={() => handleDelete(project._id)}>Delete</Button>
            </CardActions>
          </Card>
        </Grid>
      </>
  );
};

export default ProjectCard;