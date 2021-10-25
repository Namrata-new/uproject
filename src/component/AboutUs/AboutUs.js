import React from 'react';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutUs =()=>{
    const aStyle={align:'Right',color:"white",height:'6ch',width:'6ch',align:'top-middle'}
    
    return(

        
        <div class="div">
             <a href="/Home" style={aStyle}><FontAwesomeIcon icon="home" ></FontAwesomeIcon>Home </a><FontAwesomeIcon icon="angle-right" ></FontAwesomeIcon>
             About Us
        </div>

    );
};

export default AboutUs;