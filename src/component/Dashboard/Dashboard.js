import React from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";
import PersonAddAlt1Icon from '@material-ui/icons/PersonAdd';
import "./Dashboard.css";

const Dashboard =()=>{
    const avtarStyle={align:'left'}
      return (
          <Grid >
          <Avatar style={avtarStyle}>Register</Avatar> 
          <Link to="/Register" align="left"><PersonAddAlt1Icon  ></PersonAddAlt1Icon>Register</Link>
          <Avatar style={avtarStyle} src="C:\Users\Lenovo\mydemo\src\assets\images\logo\logo.jpg"></Avatar>
          </Grid>
      );

};
export default Dashboard;