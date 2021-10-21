import React,{useState}  from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Visibility } from '@material-ui/icons';
import { VisibilityOff } from '@material-ui/icons';
import {InputLabel,FormControl,InputAdornment,OutlinedInput,IconButton,TextField,Button} from '@material-ui/core';
import axios from 'axios';
import ErrorModal from "../UI/ErrorModal";

const Register =(props)=>{
  const[Message,setMessage]=useState();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
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
    
      const messageHandler=()=>{
        setMessage(null);}
      
      const buttonStyle={margin:'8px 0',width:'43ch',height:'6ch'}
      const textfieldStyle={width:'38ch', backgroundColor:'white'}
      const avtarStyle={backgroundColor:'skyblue'}
      const paperStyle={padding:20,height:'60vh',width :380,margin:"100px auto"}
      const handleSubmit= e => {
        e.preventDefault();
        
        const data={
           username:values.username,
           password:values.password,
           emailid:values.emailid,
        };
        
        axios.post('http://localhost:3001/loginuser',data).then(
         res => {
           console.log(res.data);
           setMessage({
            title:'Success',
            message:'Data SuccessFully Saved !'
           });
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
          {Message && (
        <ErrorModal 
        title={Message.title} 
        message={Message.message} 
        onConfirm={messageHandler} />)}
         <Paper style={paperStyle}>
         <Grid align="center">
           <Avatar src={process.env.PUBLIC_URL + "/log.png"}  style={{ width: 56, height: 56 }} />
              <h2>Register</h2>
            </Grid>
            <Grid align="center" >
            <TextField id="username" value={values.username}  onChange={handleChange('username')} label="User Name" variant="outlined" style={textfieldStyle} fullwidth required/>
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

export default Register;