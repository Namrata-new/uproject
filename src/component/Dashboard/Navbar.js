import React, { useState, Fragment }from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import "./Navbarstyle";
import "./Navbar.css";

import {Card,Typography,CardContent } from "@material-ui/core";
//import { Stack } from '@mui/material';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import PersonAddAlt1Icon from '@material-ui/icons/PersonAdd';
import {
  Nav,
  NavContainer, 

  NavItem,
  NavLinks,
  NavMenu,

  MenuItem,
  NavDropdown
} from './Navbarstyle';
import classes from "./Navbar.css";

const Navbar = () => {
       const h4style={color:'gray'}
       const paperStyle={padding:20,height:940,width :1581,margin:"58% 0%",boxShadow:"none"}
     // const image=imageUrl('C:\Users\Lenovo\mydemo\src\assets\images\logo\logo.jpg');
        const [colorChange, setColorchange] = useState(false);
   
        const changeNavbarColor = () =>{
           if(window.scrollY >= 80){
             setColorchange(true);
            
           }
           else{
             setColorchange(false);
           
           }
        };
        window.addEventListener('scroll', changeNavbarColor);
       
        const aStyle={align:'Right',color:"Black"}
        const selectStyle={align:'Left',width:"6pc",height:"2pc",color:"black"}
        const aRegisterStyle={align:'Left',color:"White"}
       
       
      return (
        <div>
          <Grid >
            <Fragment >
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <NavContainer>
               <Grid><br/>
               <a href="/Support" style={aStyle}><FontAwesomeIcon icon="headset" ></FontAwesomeIcon>Support</a>
               &ensp; &ensp;
               <a href="/Email" style={aStyle}><FontAwesomeIcon icon="envelope" ></FontAwesomeIcon>info@ehealthflex.com</a>
               </Grid>
               <NavMenu >
                <NavItem>
                <div class="dropdown">
                  <a class="dropbtn" href="/Languages" style={aRegisterStyle}><FontAwesomeIcon icon="globe" ></FontAwesomeIcon> Languages </a>
                   <div class="dropdown-content">
                     <select name="" style={selectStyle}  placeholder="select" >
                     <option >English</option>
                     <option >French</option>
                     <option >Hindi</option>
                    

                     </select>
                   
                   </div>
                </div> 
                </NavItem>             
                <NavItem>
            
                 
                </NavItem>
                <NavItem>
                <a href="/Signin" style={aRegisterStyle}><FontAwesomeIcon icon="user-circle" ></FontAwesomeIcon>Sign In</a>
                </NavItem>
                <NavItem>
   
                <a href="/Register" style={aRegisterStyle}><FontAwesomeIcon icon="user-plus" ></FontAwesomeIcon>Register</a>
                </NavItem>
              </NavMenu>
           </NavContainer>
        </Nav>
      </Fragment>  
      
    
      <Fragment align="left" >
        <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
           <NavContainer>
           <a class="navbar-brand" href="/">
           <div>
            <img  class="img" src={process.env.PUBLIC_URL + "/logo.png"}  />
              </div>
              </a>
           
              <NavMenu>
             
                <NavItem>
                 <a href="/Home" >Home</a>
                </NavItem>
                <NavItem>
                
                <div class="dropdown">
                  <a class="dropbtn" href="/AboutUs">About us 
                    
                  </a>
                   <div class="dropdown-content" >
                     <a href="/Aboutus"  >About us</a>
                     <a href="/Affiliateprogram">Affiliate Program</a>
                     <a href="/Service">Service</a>
                     <a href="/Help">Help</a>
                     <a href="/Howitworks">How it works</a>
                   </div>
                </div> 
                </NavItem>             
                <NavItem>
                 
                <div class="dropdown">
                  <a class="dropbtn" href="/Torisumpackage">Torisum Package 
                      
                  </a>
                  <div class="dropdown-content">
                    <a  href="/Standard">Standard</a>
                     <a href="/Premium">Premium</a>
                     <a href="/Compare">Compare</a>
                  </div>
                </div> 
               
                
                 
                </NavItem>
                <NavItem>
                  <a href="/Medic">Find A medic</a>
                </NavItem>
                <NavItem>
                <div class="dropdown">
                  <a class="dropbtn" href="#">Blog
                       <i class="fa fa-caret-down"></i>
                  </a>
                  <div class="dropdown-content">
                    <ul >
                     <a href="/Blog">Blog</a>
                     <a href="/Blog1">Blog 1</a>
                     <a href="/Blog2">Blog 2</a>
                     <a href="/Blog3">Blog 3</a>
                   </ul>
                  </div>
                </div> 
                </NavItem>
                <NavItem>
                  <a  class="link-button" href="/Contactus">Contact Us</a>
                 
                </NavItem>
             
              </NavMenu>
           </NavContainer>
        </Nav>
      </Fragment>
       <Grid class="grid"> 
         
         <NavContainer>
        
           <a class="navbar-brand" >
           <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           
          
           <Col xs={6} md={4}><Image src={process.env.PUBLIC_URL + "/mt.png"} rounded />
           <h4 style={h4style} >Looking for a stress-free medical journey? </h4>
           </Col></a>
           </NavContainer>  </Grid>    
     
       </Grid>
         <Paper elevation={10} style={paperStyle}>
            <Grid >
                  <Card class="card">
                    <span >REACH BEFORE YOY FLY OUT</span>
                    <div class="rt1-section-title">
                    Connect With The <br/>Leading Doctors &<br/> Hospitals
                    </div>
                    <p>
                    You can rely on us for choosing the top specialists and clinics. The list of doctors and hospitals present on <br/>the portal is curated after thorough research and you can expect to find the best-fit as per your<br/> requirement. You can rely on us for finding the best doctors in India and around the globe. This is not a <br/>google promoted list that we provide.


                    </p>
                  </Card>
                 <br/>
                 <br/><br/>
                 <div align="center">
                  <div class="rt1-section-title">
                  Simple Steps to Get Started
                  </div>
                  <p>
                  Prepare For Your Medical Trip. Find out all you need to know before you start. Healthcare issues are critical & unique at the same <br/> time. And there is no one package that fits all. That's why we offer customized treatment packages
                  </p>
                </div>
                <br/><br/>
                <div class="row" >
                     <div class="column">
                            <Avatar  src={process.env.PUBLIC_URL + "s_icon_4.png"} style={{ width: 150, height: 150,margin:'auto 68% '}}  />
                            
                      </div>
                      <div class="column">
                            <Avatar   src={process.env.PUBLIC_URL + "s_icon_5.png"} style={{ width: 150, height: 150,margin:'auto 46% ' }}  />
                          
                      </div>
                      <div class="column">
                           <Avatar   src={process.env.PUBLIC_URL + "s_icon_6.png"} style={{ width: 150, height: 150,margin:'auto 24% ' }}  />
                      </div>
                      <div class="column">
                           <Avatar   src={process.env.PUBLIC_URL + "s_icon_7.png"} style={{ width: 150, height: 150,margin:'auto 1%' }}  />
                      </div>
               
                </div>
                <div class="row" >
                     <div class="column">
                      <h1 style={{ margin:'auto 64% ',color:'black',width:'100%' }}><b>Sneak Peak</b></h1>
                      </div>
                      <div class="column">
                      <h1 style={{ margin:'auto 52% ',color:'black' }}><b>Travel</b></h1>
                      </div>
                      <div class="column">
                      <h1 style={{ margin:'auto 14% ',color:'black' }}><b>Accommodation</b></h1>
                      </div>
                      <div class="column">
                      <h1 style={{ margin:'auto 1% ',color:'black' }}><b>Treatment</b></h1>
                      </div>
               
                </div>
                   <br/>
                <div class="row" >
                     <div class="column">
                      <p style={{ margin:'auto 54% ',color:'black',width:'100%' }}>Over 1,200 Hospitals, Clinics and<br/><p style={{margin:'auto 10%'}}> Healthcare Providers</p></p>
                      </div>
                      <div class="column">
                      <p style={{ margin:'auto 28% ',color:'black',width:'100%' }}>Search by price, destination, and ratings</p>
                      </div>
                      <div class="column">
                      <p style={{ margin:'auto 8% ',color:'black',width:'100%' }}>Get best in class stay experience with us.</p>
                      </div>
                      <div class="column">
                      <p style={{ margin:'auto -4% ',color:'black',width:'100%' }}>Get the most suitable treatment options <br/>and packages in India & across the globe</p>
                      </div>
               
                </div>

                  
            </Grid>

          </Paper>
          <Paper  style={{height:940,width :1581,boxShadow:"none"}}>
         
             <Grid >
               <Card  class="grid1">
               <h1 style={{color:'black',margin:'0% 10%'}}>Hello</h1>
               </Card>
            </Grid>
          </Paper>
        
       </div>
      
       
    );
};
  
export default Navbar;
        