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
                <a href="/SighIn" style={aRegisterStyle}><FontAwesomeIcon icon="user-circle" ></FontAwesomeIcon>Sign In</a>
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
           <div class="image">
            <img url="C:\Users\Lenovo\mydemo\src\assets\images\logo\logo.jpg"  />
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
                     <a href="#"  >About us</a>
                     <a href="#">Affiliate Program</a>
                     <a href="#">Service</a>
                     <a href="#">Help</a>
                     <a href="#">How it works</a>
                   </div>
                </div> 
                </NavItem>             
                <NavItem>
                <div class="dropdown">
                  <a class="dropbtn" href="/Torisumpackage">Torisum Package 
                       <i class="fa fa-caret-down"></i>
                  </a>
                  <div class="dropdown-content">
                     <a href="#">Standard</a>
                     <a href="#">premium</a>
                     <a href="#">Compare</a>
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
                     <a href="#">Blog</a>
                     <a href="#">Blog 1</a>
                     <a href="#">Blog 2</a>
                     <a href="#">Blog 3</a>
                   
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