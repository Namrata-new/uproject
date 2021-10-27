import React from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import {TextField,Button} from '@material-ui/core';

const Forgot =()=>{

  const buttonStyle={margin:'8px 0',width:'42ch',height:'6ch' }
  const textfieldStyle={width:'38ch', backgroundColor:'white'}
  const avtarStyle={backgroundColor:'skyblue'}
  const paperStyle={padding:20,height:'58vh',width :380,margin:"100px auto"}
  const h1style={Font:"bold" }
  const colorstyle={color:"gray"}
   return(
      <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <Avatar src={process.env.PUBLIC_URL + "/log.png"}  style={{ width: 56, height: 56 }} />
              <h1 style={h1style}>Reset Password</h1>
            </Grid>
            <Grid align="center">
            <TextField id="username" label="Username" variant="outlined" style={textfieldStyle} fullwidth required/>
            <br/><br/>
            <label align="center" style={colorstyle} >OR</label> 
            <br/><br/>

            <TextField id="emailid" label="Email Id" variant="outlined" style={textfieldStyle} fullwidth required/>
            <br/><br/>
            <Button variant="contained" type='submit'color='primary' style={buttonStyle} fullwidth>Continue</Button>
            </Grid>
        </Paper>
      </Grid>

   );
};

export default Forgot;

