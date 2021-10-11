import React from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Visibility } from '@material-ui/icons';
import { VisibilityOff } from '@material-ui/icons';
import {InputLabel,FormControl,InputAdornment,OutlinedInput,IconButton,TextField,Button} from '@material-ui/core';

const SignUp =(props)=>{
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
      const buttonStyle={margin:'8px 0',width:'43ch',height:'6ch'}
      const textfieldStyle={width:'38ch', backgroundColor:'white'}
      const avtarStyle={backgroundColor:'skyblue'}
      const paperStyle={padding:20,height:'72vh',width :380,margin:"100px auto"}
    return(
      
        <Grid>
         <Paper style={paperStyle}>
         <Grid align="center">
            <Avatar style={avtarStyle}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
              <h2>Sign In</h2>
            </Grid>
            <Grid align="center" >
            <TextField id="firstname" label="First Name" variant="outlined" style={textfieldStyle} fullwidth required/>
            <br/><br/>
            <TextField id="lastname" label="Last Name" variant="outlined" style={textfieldStyle} fullwidth required/>
            <br/><br/>
            <TextField id="emailid" label="Email Id" variant="outlined" style={textfieldStyle} fullwidth required/>
            <br/><br/>
            
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined"  style={textfieldStyle}>
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end" >
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
        </FormControl>
        <br/><br/>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined"  style={textfieldStyle}>
          <InputLabel htmlFor="outlined-adornment-password" >Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'ConfirmPassword'}
            value={values.password}
            onChange={handleChange('ConfirmPassword')}
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
            label="ConfirmPassword"
          />
        </FormControl>
        <br/><br/>
        
      
        <Button variant="contained" type='submit'color='primary' style={buttonStyle} fullwidth>Register</Button>
        
      
        </Grid>
        
       
     
         </Paper>

        </Grid>
       
    );
};

export default SignUp;