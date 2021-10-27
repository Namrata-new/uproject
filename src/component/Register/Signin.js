import React,{useState} from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
// import Stack from '@mui/material/Stack';
import './Login.Module.css';
import './Signin.Module.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Visibility ,VisibilityOff} from '@material-ui/icons';
import GoogleButton from 'react-google-button';
import {InputLabel,FormControl,InputAdornment,OutlinedInput,IconButton,TextField,Button,Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import axios from 'axios';
import ErrorModal from "../UI/ErrorModal";
import AlertTitle from '@material-ui/lab/AlertTitle';
import Alert from 'react-popup-alert';


const Signin =(props)=>{
  const[error,setError]=useState();

    async function getalluser(){
     
     
    try{
      
      const res = axios('http://localhost:3001/loginuser');
      const userdata=(await res).data;
      for( let i=0 ;i<userdata.length;i++)
      {
         if(userdata[i].emailid === values.emailid && userdata[i].password === values.password)
         {
        
          // <Alert severity="success">
          // <AlertTitle>Success</AlertTitle>
          // You have successFull Login — <strong>check it out!</strong>
          // </Alert>
             setError({
            title:'Sucess',
            message:'Login SuccessFull'
          });
          return;
            // console.warn("Login SuccessFull");
             //return ({pathname:"/Home"});
             //
            
         }
         else {
                setError({
                     title:'Warning',
                     message:'Input Username and Password'
                    });
                 return;
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
    emailidError:'',
    passworderror:'',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
   

  };
   const errorHandler=()=>{
     setError(null);}

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
  const colorstyle={color:'gray'}
  const h1colorstyle={color:'black'}
  const avtarStyle={backgroundColor:'skyblue'}
  const paperStyle={padding:20,height:'74vh',width :380,margin:"100px auto"}
  const imagesurl='C:\Users\Lenovo\mydemo\src\log.png';
   return(
    
      <Grid>
        {error && (
        <ErrorModal 
        title={error.title} 
        message={error.message} 
        onConfirm={errorHandler} />)}
      
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            
            <Avatar src={process.env.PUBLIC_URL + "/log.png"}  style={{ width: 56, height: 56 }}/>
            <h2 style={h1colorstyle}>Welcome</h2>
            </Grid>
           
            <Grid align="center" >
            <TextField  id="emailid" value={values.emailid}  onChange={handleChange('emailid')} label="Email Id" variant="outlined" style={textfieldStyle} fullwidth required/>
            
            <br/><br/>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined" style={textfieldStyle}>
          <InputLabel htmlFor="outlined-adornment-password" 
         required>Password</InputLabel>
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
             <Button variant="contained" onClick={getalluser} type='submit'color='primary' style={buttonStyle} fullwidth>Continue</Button>
              <br/><br/>
        <label style={colorstyle}><b>OR</b></label><br/><br/>
        <GoogleButton style={gbuttonStyle}  onClick={() => { console.log('Google button clicked') }}>Continue with Google</GoogleButton>
        <br/>
        
        <Typography style={colorstyle}> Don't have an account?
          
        <Link  to={{pathname:"/Register"} }>
           Sign up
        </Link>
               
        </Typography> 
       
        </Grid>
       
        </Paper>
       
      </Grid>
      
   );
};

export default Signin;

