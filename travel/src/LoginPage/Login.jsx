import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./Loginpage.css";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate ,Navigate} from 'react-router-dom';
import axios from "axios";
import { useState,useEffect } from 'react';
import Cookies from 'js-cookie'
function Copyright(props) {
    
 

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {

    const navigate=useNavigate();
    
    // useEffect(() => {
    //   const token = Cookies.get("jwt_token");
    //   setCheck(token)
    //   if (check !== '') {
    //     navigate('/', { replace: true }); // Redirect to '/' if token exists
    //   }
    // },[navigate]);
   

    const [loginData,setData]=useState({
      email:"",
      password:""
    });
   
    const [Loginerr,setLoginerr]=useState(false)
    const [Logintext,setLogintext]=useState('')

  const handleChange=(event)=>
  {
    setData({
      ...loginData,
      [event.target.name]:event.target.value
    })
  }


  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const LoginData={
      email: data.get('email'),
      password: data.get('password'),
    };
    const res=await axios.post("http://localhost:3001/login",LoginData)
    if(typeof(res.data)==="object")
    {
    Cookies.set('jwt_token', res.data.Token, {
      expires: 30,
      path: '/',
    })
    Cookies.set('user',res.data.userName,{
      expires: 30,
      path: '/',
    })
    navigate('/', { replace: true });
      setLoginerr(false)
      
    }
    else 
    {
       setLoginerr(true)
       setLogintext(res.data)
    }
  };
  const token = Cookies.get('jwt_token')
  if(token!==undefined)
  {
   return <Navigate to="/" replace />
  }


  return (
    
    <ThemeProvider theme={defaultTheme}>
        <div className='LoginPageCon shadow'>
      <Container className='mr-5 ' component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="Login-box "
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography className='sign-name' component="h1" variant="">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            {Loginerr && <p className='text-danger ml-2 Error-msg-login'>*{Logintext}</p>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <a className='signUp-link' onClick={()=>navigate('/signup')} variant="body2">
                  {"Don't have an account? Sign Up"}
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </div>
    </ThemeProvider>
    
  );
}