import React from 'react';
import "./Footer.css";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    } from "./Footerstyles";
    
const Footer =()=>{
  
    return(
        
        <div>
            <Box  >
            <Row>
		    <Column>
			<Heading>Company Info</Heading>
			<FooterLink href="#">Compliance for international users</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		   </Column>
           </Row>
           </Box>
            <footer >
               
              <row>
               <column>
                 <heading>Company Info</heading>
                 <link href="#" Compliance for international users></link>
               </column>

              </row>
            </footer>
            

           <footer >
        

           <p>   Copyright © 2021. All Rights Reserved By eHealthFlex Technologies Private Limited<br/>
           <a href="mailto:hege@example.com">hege@example.com</a></p>
           </footer>
     </div>
     

    );
};

export default Footer;