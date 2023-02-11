import React from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import "../Auth/authentication.css";
import { useForm } from 'react-hook-form';
import { useData } from '../../../context/ContextProvider';
import { error, loginUser } from '../../../app/actionCreators/actionCreators';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import toast from '../../../app/toast/toast';

const Login = () => {
  const {state, dispatch} = useData();
  const {handleSubmit, register, watch} = useForm();
  const [moveControl, setMoveControl] = useState(true);
  const navigate = useNavigate();

  const email = watch("email");
  const pass = watch("password");


  const handleLogin = ({ email, password})=> {
    const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginUser(user.email));
        if(user.email){
          navigate("/")
        }
      })
      .catch((err) => {
        dispatch(error({message: err.message, code: err.response.status}))
      });
    }
    const [hover, setHover] = useState('in');
    useEffect(()=>{
      if(pass && email && pass.length >=6){
        setMoveControl(false)
      }else{
        setMoveControl(true)
      }
    }, [pass, email]);
    useEffect(()=>{
      if(state.isError){
        toast("danger", "Error", state.error.message)
      }
    }, [state]);

  return (
    <div className="login">
      <Typography variant='h4' sx={{textAlign:"center", mb:3}}>Sign In</Typography>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Box sx={{
                  '& > :not(style)': {width: '50%', m:" 0 auto" },
                }} component="div">
          <Paper elevation={3} sx={{ p: 4,}} className="auth-paper" component="div">
            <Box 
                component="div"
                sx={{
                  '& > :not(style)': { width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
              <TextField {...register("email", {required:true})} type="email" label="Email" variant="standard" />
            </Box>
            <Box 
                component="div"
                sx={{
                  '& > :not(style)': { mt: 3, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
              <TextField {...register("password", {required:true})} type="password" label="Password" variant="standard" />
            </Box>

            <Box component="div" sx={{mt:3, textAlign:'right'}}>
              <Button  onMouseEnter={() => setHover(hover !== "in" ? "in" : "out")}
               //  onMouseLeave={() => setHover(false)}
               style={{
                 transition: "all 0.1s ease-in-out",
                 transform: moveControl &&( hover === "in" ? "translateX(-250px)" : "translateX(0)"),
                }}
                variant={!moveControl ? "contained" : "outlined"} color={moveControl ? "error" : "primary"} 
                type="submit">Sign In</Button>
            </Box>

          </Paper>
        </Box>
      </form>
       
    </div>
  );
};

export default Login;