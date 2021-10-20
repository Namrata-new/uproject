import React from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
// import Stack from '@mui/material/Stack';
import './Login.Module.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Visibility ,VisibilityOff} from '@material-ui/icons';
import GoogleButton from 'react-google-button';
import {InputLabel,FormControl,InputAdornment,OutlinedInput,IconButton,TextField,Button,Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

const Login =()=>{
 
  async function getalluser(){
      // console.log(values.emailid);
    try{
      const res = axios('http://localhost:3001/loginuser');
      const userdata=(await res).data;
      for( let i=0 ;i<userdata.length ;i++)
      {
         if(userdata[i].emailid === values.emailid && userdata[i].password === values.password)
         {
        
          <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successFull Login — <strong>check it out!</strong>
          </Alert>
            
             console.log("Login SuccessFull");
             //return ({pathname:"/Home"});
             //
             break;
         }
         else {
              console.log("wrong data enter ");
              break;
         }
        // console.log(p[i].emailid);
        // console.log(values.emailid);
         
      }
    
    }catch(error){
      console.log("Something went wrong");

    }
   }
  const [values, setValues] = React.useState({
    emailid:'',
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
 
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
    // const res = axios.get(`http://localhost:3000/loginuser`);
    // if(res.data == emailid)
    // {
    //       console.log({emailid});
    // }
    //console.log(res);

    // axios.post('http://localhost:3000/loginuser',data).then(
    //  res => {
    //    console.log(res.data);
   
    //   }
    // ).catch(
    //   err=>{
    //     console.log(err);
    //   }
    // );
  
    // console.log(data);

    
  const gbuttonStyle={width:'37ch', backgroundColor:'white',height:'5.5ch',color:'black'}
  const buttonStyle={margin:'8px 0',width:'42ch',height:'6ch' }
  const textfieldStyle={width:'38ch', backgroundColor:'white'}
  const avtarStyle={backgroundColor:'skyblue'}
  const paperStyle={padding:20,height:'72vh',width :380,margin:"100px auto"}
  const emailvalidaion={patterns:'/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/'}
   return(
    
      <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            {/* <Stack direction="row" spacing={2}>
               <Avatar alt="Remy Sharp" src="C:\Users\Lenovo\mydemo\src\assets\images\logo\logo.jpg" />
      
            </Stack> */}
            
            <h1>Welcome</h1>
            </Grid>
            <Grid align="center" >
            <TextField id="emailid" value={values.emailid} pattern={'/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/'} onChange={handleChange('emailid')} label="Email Id" variant="outlined" style={textfieldStyle} fullwidth required/>
            
            <br/><br/>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined" style={textfieldStyle}>
          <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> </Grid>
        <br/><br/>
       
        <Typography  margin="0px 0px" >
         <Link to={"/Forgot"} >Forgot password ?</Link>
        
        </Typography> 
        <br/> 
        <Grid align="center">
             <Button variant="contained"  onClick={getalluser} type='submit'color='primary' style={buttonStyle} fullwidth>Continue</Button>
              <br/><br/>
        <label>Or</label><br/><br/>
        <GoogleButton style={gbuttonStyle}  onClick={() => { console.log('Google button clicked') }}>Continue with Google</GoogleButton>
        <br/>
        
        <Typography> Don't have an account?
          
        <Link to={{pathname:"/SignUp"} }>
           Sign up
        </Link>
        
        </Typography> 
       
        </Grid>
        </Paper>
      </Grid>
      
   );
};

export default Login;

