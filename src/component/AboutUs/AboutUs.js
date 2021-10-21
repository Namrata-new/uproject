import React from 'react';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutUs =()=>{
    const aStyle={align:'Right',color:"gray",height:'6ch',width:'6ch',align:'top-middle'}
    return(
        
        <div>
             <a href="/Home" style={aStyle}><FontAwesomeIcon icon="home" ></FontAwesomeIcon>Home </a><FontAwesomeIcon icon="angle-right" ></FontAwesomeIcon>
             
        </div>

    );
};

export default AboutUs;