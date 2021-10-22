import React, { useState, Fragment }from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import "./Navbarstyle";
import "./Navbar.css";
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
       const h4style={color:'gray'};
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
        const selectStyle={align:'Left',width:"6pc",height:"2pc"}
        const aRegisterStyle={align:'Left',color:"White"}
        const divStyle={color:"Gray"}
        
      return (
          <Grid >
            <Fragment >
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <NavContainer>
               <Grid><br/>
               <a href="/Support" style={aStyle}><FontAwesomeIcon icon="headset" ></FontAwesomeIcon>Support</a>
               &ensp; &ensp;
               <a href="/Email" style={aStyle}><FontAwesomeIcon icon="envelope" ></FontAwesomeIcon>info@ehealthflex.com</a>
               </Grid>
               <NavMenu>
                <NavItem>
                <div class="dropdown">
                  <a class="dropbtn" href="/Languages" style={aRegisterStyle}><FontAwesomeIcon icon="globe" ></FontAwesomeIcon> Languages </a>
                   <div class="dropdown-content">
                     <select name="" style={selectStyle} class="select" >
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
            <img  src={process.env.PUBLIC_URL + "/logo.png"}  />
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
           <Grid > 
           <Fragment > 
           <NavContainer>
           
           <div>
           <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <div class="div">
               <section class="emigr-services-area-rtbgprefix-contain">
               
               <div class="container">
              <div class="row">
              <div class="section-title-spacer"></div>
                <div class="col-lg-8 text-center mx-auto">
                    <div class="rt-section-title-wrapper">
                        <h2 class="rt-section-title">
                            <span>Reach Out Before You Fly Out</span>
                            Connect with the Leading Doctors & Hospitals
                        </h2>
                        <p>
                        You can rely on us for choosing the top specialists and clinics.  The list of doctors and hospitals present on the portal is curated after thorough research and you can expect to find the best-fit as per your requirement. You can rely on us for finding the best doctors in India and around the globe. This is not a google promoted list that we provide.</p>
                    </div>
                </div>
            </div>
            </div> 
        <div class="spacer-bottom"></div>
        </section>
             </div>
             </div>
           </NavContainer></Fragment>  </Grid> 
        
     
       </Grid>
    );
};
  
export default Navbar;
        