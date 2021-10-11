import React from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import './Login.Module.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Visibility ,VisibilityOff} from '@material-ui/icons';
import GoogleButton from 'react-google-button';
import {InputLabel,FormControl,InputAdornment,OutlinedInput,IconButton,TextField,Button,Link,Typography} from '@material-ui/core';
//import SignUp from './SignUp';

const Login =()=>{
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
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
 
  
  const gbuttonStyle={width:'37ch', backgroundColor:'white',height:'5.5ch',color:'black'}
  const buttonStyle={margin:'8px 0',width:'42ch',height:'6ch' }
  const textfieldStyle={width:'38ch', backgroundColor:'white'}
  const avtarStyle={backgroundColor:'skyblue'}
  const paperStyle={padding:20,height:'72vh',width :380,margin:"100px auto"}
   return(
      <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <Avatar style={avtarStyle}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
              <h1>Welcome</h1>
            </Grid>
            <Grid align="center" >
            <TextField id="username" label="Email Id" variant="outlined" style={textfieldStyle} fullwidth required/>
            
            <br/><br/>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined" style={textfieldStyle}>
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
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
         <Link href="#" >Forgot password ?</Link>
        
        </Typography> 
        <br/> 
        <Grid align="center">
             <Button variant="contained" type='submit'color='primary' style={buttonStyle} fullwidth>Continue</Button>
              <br/><br/>
        <label>Or</label><br/><br/>
        <GoogleButton style={gbuttonStyle}  onClick={() => { console.log('Google button clicked') }}>Continue with Google</GoogleButton>
        <br/>
        
        <Typography> Don't have an account?
          
        <Link href="#"  onPress={() => this.props.navigation.push('SignUp')} >
           Sign up
        </Link>
        
        </Typography> 
       
        </Grid>
        </Paper>
      </Grid>

   );
};

export default Login;

