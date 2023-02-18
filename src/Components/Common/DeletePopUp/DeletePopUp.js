import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const  DeletePopup= ({open, setOpen, setAgreement, id, title}) => {
  // const [open, setOpen] = React.useState(false);


  const handleCloseAgree = () => {
    setAgreement({agree: true, id: id});
    setOpen(false);
  };
  const handleCloseDisagree = () => {
    setAgreement({agree: false, id: null});
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description" 
        
      >
        <DialogTitle style={{textAlign:"center"}}>{"Delete "}{title} ?</DialogTitle>
        <DialogContent style={{minWidth:"400px", width:"90%", display:"flex", justifyContent:"center"}}>
          <DialogContentText id="alert-dialog-slide-description">
            <DeleteForeverIcon color="error" style={{fontSize:"5em"}} /> <br />
            <Typography variant='body' sx={{fontWeight:"bold"}}>Are you sure?</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDisagree}>Cancel</Button>
          <Button onClick={handleCloseAgree}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



export default DeletePopup;