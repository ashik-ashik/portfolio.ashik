import React from 'react';
import './Contact.css';
import { Box, Button, Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {

  const SERVICE_ID = 'personal-portfolio-ashik';
  const TEMPLATE_ID = 'template_rcquj7c';
  // const USER_ID = '';

  const { register, handleSubmit } = useForm();

  const sendEmail = data => {
    console.log(data);
    const templateParams = {
      name :'ABC',
      email:'abc123@gmail.com',
      subject:'Test',
      message:'Hey, EmailJs testing...'

    }
    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, templateParams)
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }
  return (
    <section id='get-in-touch'>
      <Typography variant='h3' className='section-title'>Get In Touch</Typography>
      <Box mt={3}>
        <Grid container>
          <Grid item md={6} lg={5}>
            
          </Grid>
          <Grid item md={6} lg={7}>
            <Box component='form' autoComplete="off" id="contact-form" onSubmit={handleSubmit(sendEmail)}>
              <TextField {...register('name')} size="small" required fullWidth label="Your Name:" variant="standard" />
              <TextField {...register('email')} size="small" required fullWidth label="Your Email:" type='email' margin="normal" variant="standard" />
              <TextField {...register('subject')} size="small" required fullWidth label="Subject:" margin="normal" variant="standard" />
              <textarea {...register('message')} placeholder='Message:' cols="30" rows="10"></textarea>
              <Button type='submit' endIcon={<SendIcon />} variant="contained" className='portfolio-button'>Send Message</Button>
            </Box>
          </Grid>
        </Grid>
        
      </Box>
    </section>
  );
};

export default Contact;