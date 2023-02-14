import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ManageProjects = () => {
  return (
    <section>
      <Typography variant="h4">Manage Projects:</Typography>
      <Box>
        <Link to="/panel/add-new-projects">
          <Button variant="contained">Add New Project</Button>
        </Link>
      </Box>
    </section>
  );
};

export default ManageProjects;