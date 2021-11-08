import React ,{useState} from 'react';
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <>
           <nav className="navbar">
               <div className="navbar-container"> 
               <Link to="/" className="navbar-logo"><br/>
                 <img  class="img" src={process.env.PUBLIC_URL + "/logo.png"}  />
               </Link>

               </div>

           </nav>
        </>

    );
}

export default Navbar;