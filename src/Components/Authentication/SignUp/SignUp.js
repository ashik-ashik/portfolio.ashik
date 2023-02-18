import React from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Typography
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import "../Auth/authentication.css";
import {
  useForm
} from 'react-hook-form';
import {
  useData
} from '../../../context/ContextProvider';
import {
  error,
  registerUser
} from '../../../app/actionCreators/actionCreators';
import {
  useState
} from 'react';
import {
  useEffect
} from 'react';
import {
  useNavigate
} from 'react-router';
import axios from 'axios';
import toast from '../../../app/toast/toast';

const SignUp = () => {
  const {
    handleSubmit,
    register,
    watch
  } = useForm();
  const [moveControl, setMoveControl] = useState(true)
  const {
    dispatch
  } = useData();
  const navigate = useNavigate();

  const email = watch("email");
  const pass = watch("password");
  const confirmPass = watch("confirmPassword");
  const handleSignUp = data => {
    console.log(data);
    if (pass && confirmPass && pass === confirmPass && pass.length >= 6) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch(registerUser(user.email));
          axios.post("http://localhost:5500/user", {
              name: data.name,
              email: user.email,
              role: "visitor",
            })
            .then(res => {
              toast('success', "Sign Up", "Welcome ")
            })
          navigate("/");
        })
        .catch((err) => {
          dispatch(error({
            message: err.message,
            code: err.response.status
          }))
          if (err.response.status !== 200) {
            toast("danger", "Error", err.message);
          }
          // ..
        });
      setMoveControl(false);
    } else {
      setMoveControl(true);
    }

  };
  useEffect(() => {
    if (pass && confirmPass && pass === confirmPass && email && pass.length >= 6) {
      setMoveControl(false)
    } else {
      setMoveControl(true)
    }
  }, [pass, confirmPass, email])


  const [hover, setHover] = useState('in');

  return ( 
  <div className = "login" >
    <Typography variant = 'h4'
    sx = {
      {
        textAlign: "center",
        mb: 3
      }
    }> Sign Up </Typography>
    <form onSubmit = {
      handleSubmit(handleSignUp)
    } >
    <Box sx = {
      {
        '& > :not(style)': {
          width: '50%',
          m: " 0 auto"
        },
      }
    }
    component = "div" >
    <Paper elevation = {
      3
    }
    sx = {
      {
        p: 4,
      }
    }
    className = "auth-paper" >
    <Box component = "div"
    sx = {
      {
        '& > :not(style)': {
          width: '100%'
        },
      }
    }
    noValidate autoComplete = "off" >
    <TextField type = "text" {
      ...register("name", {
        required: true
      })
    }
    label = "Full Name"
    variant = "standard" / >
    </Box> 
    <Box component = "div"
    sx = {
      {
        '& > :not(style)': {
          width: '100%',
          mt:"20px"
        },
      }
    }
    noValidate autoComplete = "off" >
    <TextField type = "email" {
      ...register("email", {
        required: true
      })
    }
    label = "Email"
    variant = "standard" / >
    </Box> 
    <Box component = "div"
    sx = {
      {
        '& > :not(style)': {
          mt: 3,
          width: '100%'
        },
      }
    }
    noValidate autoComplete = "off" >
    <TextField type = "password" {
      ...register("password", {
        required: true
      })
    }
    label = "Password"
    variant = "standard" />
    </Box>
    <Box component = "div"
    sx = {
      {
        '& > :not(style)': {
          mt: 3,
          width: '100%'
        },
      }
    }
    noValidate autoComplete = "off" >
    <TextField type = "password" {
      ...register("confirmPassword")
    }
    label = "Confirm Password"
    variant = "standard" />
    </Box>

    <Box component = "div"
    sx = {
      {
        mt: 3,
        textAlign: 'right'
      }
    } >
    <Button onMouseEnter = {
      () => setHover(hover !== "in" ? "in" : "out")
    }
    //  onMouseLeave={() => setHover(false)}
    style = {
      {
        transition: "all 0.1s ease-in-out",
        transform: moveControl && (hover === "in" ? "translateX(-250px)" : "translateX(0)"),
      }
    }
    variant = {
      !moveControl ? "contained" : "outlined"
    }
    color = {
      moveControl ? "error" : "primary"
    }
    type = "submit" >
    Sign Up </Button> </Box >

    </Paper> 
    </Box > </form>

    </div>
  );
};

export default SignUp;