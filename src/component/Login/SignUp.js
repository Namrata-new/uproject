import React  from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Visibility } from '@material-ui/icons';
import { VisibilityOff } from '@material-ui/icons';
import {InputLabel,FormControl,InputAdornment,OutlinedInput,IconButton,TextField,Button} from '@material-ui/core';
import axios from 'axios';

const SignUp =(props)=>{
  
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        role:'',
        status:'',
        emailid:'',
        username:'',
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
      const handleSubmit= e => {
        e.preventDefault();
        const data={
           username:values.username,
           role:values.role,
           status:values.status,
           password:values.password,
           emailid:values.emailid,
        };
        
        axios.post('http://localhost:3001/loginuser',data).then(
         res => {
           console.log(res.data);
       
          }
        ).catch(
          err=>{
            console.log(err);
          }
        );
      
        //console.log(data);
      };
    return(
      
        <Grid>
         <Paper style={paperStyle}>
         <Grid align="center">
            <Avatar style={avtarStyle}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
              <h2>Sign In</h2>
            </Grid>
            <Grid align="center" >
            <TextField id="username" value={values.username}  onChange={handleChange('username')} label="User Name" variant="outlined" style={textfieldStyle} fullwidth required/>
            <br/><br/>
            <TextField id="role"  value={values.role} onChange={handleChange('role')} label="Role" variant="outlined" style={textfieldStyle} fullwidth required/>
            <br/><br/>
            <TextField id="status"  value={values.status} onChange={handleChange('status')} label="Status" variant="outlined" style={textfieldStyle} fullwidth required/>
            <br/><br/>
            <TextField id="emailid"  value={values.emailid} onChange={handleChange('emailid')} label="Email Id" variant="outlined" style={textfieldStyle} fullwidth required/>
            <br/><br/>
          <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined"  style={textfieldStyle}>
          <InputLabel htmlFor="outlined-adornment-password"  >Password</InputLabel>
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
        
      
        <Button variant="contained" onClick={handleSubmit} type='submit'color='primary' style={buttonStyle} fullwidth>Register</Button>
        
      
        </Grid>
        
       
     
         </Paper>

        </Grid>
        
    );
};

export default SignUp;