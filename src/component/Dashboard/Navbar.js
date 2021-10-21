import React, { useState, Fragment }from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";
import PersonAddAlt1Icon from '@material-ui/icons/PersonAdd';
import "./Navbarstyle";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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
                       <i class="fa fa-caret-down"></i>
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
                       <i class="fa fa-caret-down"></i>
                  </a>
                  <div class="dropdown-content">
                     <a href="/Standard">Standard</a>
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
                     <a href="/Blog">Blog</a>
                     <a href="/Blog1">Blog 1</a>
                     <a href="/Blog2">Blog 2</a>
                     <a href="/Blog3">Blog 3</a>
                   
                  </div>
                </div> 
                </NavItem>
                <NavItem>
                  <a  class="link-button" href="/Contactus"><b>Contact Us</b></a>
                </NavItem>
              </NavMenu>
           </NavContainer>
        </Nav>
      </Fragment>
    
       </Grid>
    );
};
  
export default Navbar;
          {/* <Avatar style={avtarStyle}>Register</Avatar> 
          <Link to="/Register" align="left"><PersonAddAlt1Icon  ></PersonAddAlt1Icon>Register</Link>
          <Avatar style={avtarStyle} src="C:\Users\Lenovo\mydemo\src\assets\images\logo\logo.jpg"></Avatar>
          </Grid>
      );

};
export default Dashboard; */}