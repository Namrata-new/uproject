import React from 'react';
//import logo192Logo from "./assets/logo192.png";

const Contactus =()=>{
   // const image="C:\Users\Lenovo\mydemo\public\logo192.png";
    //console.log(image);
    return(
        
        <div>
        <h1>Contactus Component </h1>
        <img src={process.env.PUBLIC_URL + "/logo512.png"} />
      
        
        </div>

    );
};

export default Contactus;