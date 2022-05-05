import React, { useState } from 'react';
import './Contact.css';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';



const Contact = () => {

  const [popOpen, setPop]= useState(false);

  const SERVICE_ID = 'personal-portfolio-ashik';
  const TEMPLATE_ID = 'template_rcquj7c';
  const USER_ID = 'user_91tDIdVCWF47uYlqNnlFd';

  const { register, handleSubmit, reset } = useForm();

  const sendEmail = data => {
    console.log(data);
    const templateParams = {
      name :data.name,
      email:data.email,
      subject:data.subject,
      message:data.message + "You can contact me with this" + data.phone

    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", USER_ID, templateParams)
      .then((result) => {
        setPop(true);
        reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  // contact info
  const contactInfo = [
    {name:"Phone", element:['+8801714911463', '+8801884142484'],icon:<PhoneIcon/>},
    {name:"Email", element:['mdashika989@gmail.com', 'ashik.free099@gmail.com'],icon:<EmailIcon/>},
    {name:"Address", element:['Singra, Natore', 'Rajshahi, Bangladesh'],icon:<AddLocationAltIcon/>},
  ];



  return (
    <section id='get-in-touch'>
      <Typography variant='h3' className='section-title'>Get In Touch </Typography>
        <Grid mt={3} container spacing={3}>
          <Grid item xs={12} md={6} >
          {
            contactInfo.map(item => <div key={item.name} style={{width:'100%'}}>
              <Paper square sx={{marginTop:'20px'}} className="contact-info-box">
                <div className="icon-box">{item.icon}</div>
                <div className="detail-box">
                  <Typography variant='h6' className='bolder-text box-title' mb={2} >{item.name}</Typography>
                  {item.element.map(i=><Typography key={i}>{i}</Typography>)}
                </div>
              </Paper>
            </div>)
          }
          </Grid>
          <Grid item xs={12} md={6} >
            <Box component='form' autoComplete="off" id="contact-form" onSubmit={handleSubmit(sendEmail)}>
              <TextField {...register('name')} size="small" required fullWidth label="Your Name:" variant="standard" />
              <TextField {...register('email')} size="small" required fullWidth label="Your Email:" type='email' margin="normal" variant="standard" />
              <TextField {...register('subject')} size="small" required fullWidth label="Subject:" margin="normal" variant="standard" />
              <TextField {...register('phone')} size="small" required fullWidth label="Phone (Optional):" margin="normal" variant="standard" />
              <textarea {...register('message')} placeholder='Message:' cols="30" rows="10"></textarea>
              <Button type='submit' endIcon={<SendIcon />} variant="contained" className='portfolio-button'>Send Message</Button>
            </Box>
          </Grid>
        </Grid>
        

        <Snackbar
          open={popOpen}
          autoHideDuration={4000}
          anchorOrigin={{ 
            vertical: 'bottom',
            horizontal: 'right', }}
          onClose={()=>setPop(false)}
          message="Message Sent Successfully!"
          // action={action}
        />
    </section>
  );
};

export default Contact;