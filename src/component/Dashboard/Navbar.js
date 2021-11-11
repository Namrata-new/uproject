import React, { useState, Fragment }from 'react';
import {Grid,Paper,Avatar} from '@material-ui/core';
import "./Navbarstyle";
import "./Navbar.css";
import CardMedia from '@mui/material/CardMedia';
import BasicSelect from "../UI/Select/Select";
import {Card,Typography,CardContent } from "@material-ui/core";
//import { Stack } from '@mui/material';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import {InputLabel,FormControl,OutlinedInput,Chip,MenuItem,Box} from '@material-ui/core';
import PersonAddAlt1Icon from '@material-ui/icons/PersonAdd';
import {Nav,NavContainer, NavItem,NavMenu} from './Navbarstyle';
import useWindowSize from "./useWindowSize";
import { CardActionArea } from '@mui/material';
import Theming from "../UI/Themebutton/Theming";


const currencynames = [
  'Albanian Lek','East Caribbean Dollar','Euro','Barbadian Dollar','Bhutanese Ngultrum',
  'Brunei Dollar','Central African CFA Franc','Cuban Peso','United States Dollar',
  'Falkland Islands Pound','Gibraltar Pound','Hungarian Forint','Iranian Rial','Jamaican Dollar',
  'Australian Dollar','Lao Kip','Libyan Dinar','Macedonian Denar','West African CFA Franc',
  'New Zealand Dollar','Omani Rial','Papua New Guinean Kina','Rwandan Franc', 'Samoan Tala',
  'Serbian Dinar','Swedish Krona','Tanzanian Shilling','Armenian Dram','Bahamian Dollar',
   'Bosnia And Herzegovina Konvertibilna Marka','Cape Verdean Escudo','Chinese Yuan',
   'Costa Rican Colon','Czech Koruna','Eritrean Nakfa','Georgian Lari','Haitian Gourde', 
   'Indian Rupee','Jordanian Dinar','South Korean Won','Lebanese Lira','Malawian Kwacha',
   'Mauritanian Ouguiya','Mozambican Metical','Netherlands Antillean Gulden','Peruvian Nuevo Sol',
   'Qatari Riyal','Sao Tome And Principe Dobra','Sierra Leonean Leone','Somali Shilling',
   'Sudanese Pound','Syrian Pound','Angolan Kwanza',' Aruban Florin','Bahraini Dinar','Belize Dollar',
   'Botswana Pula','Burundi Franc','Cayman Islands Dollar','Colombian Peso','Danish Krone',
   'Guatemalan Quetzal','Honduran Lempira','Indonesian Rupiah','Israeli New Sheqel',
   'Kazakhstani Tenge','Kuwaiti Dinar','Lesotho Loti','Malaysian Ringgit','Mauritian Rupee',
   'Mongolian Tugrik','Myanma Kyat','Nigerian Naira','Panamanian Balboa','Philippine Peso',
   ' Romanian Leu','Saudi Riyal','Singapore Dollar','South African Rand','Surinamese Dollar',
   'New Taiwan Dollar','Paanga','Venezuelan Bolivar','Algerian Dinar','Argentine Peso','Azerbaijani Manat',
   'Belarusian Ruble','Bolivian Boliviano','Bulgarian Lev','Canadian Dollar','Chilean Peso','Congolese Franc',
    'Dominican Peso','Fijian Dollar','Gambian Dalasi','Guyanese Dollar','Icelandic Króna','Iraqi Dinar',
    'Japanese Yen','North Korean Won','Latvian Lats','Swiss Franc','Malagasy Ariary','Moldovan Leu','Moroccan Dirham',
    'Nepalese Rupee','Nicaraguan Cordoba','Pakistani Rupee','Paraguayan Guarani','Saint Helena Pound',
    'Seychellois Rupee','Solomon Islands Dollar','Sri Lankan Rupee','Thai Baht','Turkish New Lira',
    'UAE Dirham','Vanuatu Vatu','Yemeni Rial','Afghan Afghani','Bangladeshi Taka','Brazilian Real', 
    'Cambodian Riel','Comorian Franc','Croatian Kuna','Djiboutian Franc','Egyptian Pound','Ethiopian Birr',
    'CFP Franc','Ghanaian Cedi','Guinean Franc','Hong Kong Dollar','Special Drawing Rights',
    'Kenyan Shilling','Kyrgyzstani Som','Liberian Dollar','Macanese Pataca','Maldivian Rufiyaa',
    'Mexican Peso','Namibian Dollar','Norwegian Krone','Polish Zloty','Russian Ruble',
    'Swazi Lilangeni','Tajikistani Somoni','Trinidad and Tobago Dollar','Ugandan Shilling',
    'Uruguayan Peso','Vietnamese Dong','Tunisian Dinar','Ukrainian Hryvnia','Uzbekistani Som',
    'Turkmenistan Manat','British Pound','Bitcoin','New Belarusian Ruble',
    
];
function getStyles(currencyname, currencyName, theme) {
  return {
    fontWeight:
    currencyName.indexOf(currencyname) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const Navbar = () => {
      const h4style={color:'gray'}
       const paperStyle={padding:20,height:940,width :1581,margin:"58% 0%",boxShadow:"none"}
     // const image=imageUrl('C:\Users\Lenovo\mydemo\src\assets\images\logo\logo.jpg');
        const [colorChange, setColorchange] = useState(false);
        const theme = useTheme();
         const [currencyName, setcurrencyName] = React.useState([]);
      
          const handleChange = (event) => {
            setcurrencyName(event.target.value);
          };
        const { width } = useWindowSize();
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
          {width > 500 &&(
            <>
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
               <space/>
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
                            <Avatar class="avatar" src={process.env.PUBLIC_URL + "s_icon_4.png"} style={{ width: 150, height: 150,margin:'auto 68% '}}  />
                            
                      </div>
                      <div class="column">
                            <Avatar class="avatar" src={process.env.PUBLIC_URL + "s_icon_5.png"} style={{ width: 150, height: 150,margin:'auto 46% ' }}  />
                          
                      </div>
                      <div class="column">
                           <Avatar class="avatar" src={process.env.PUBLIC_URL + "s_icon_6.png"} style={{ width: 150, height: 150,margin:'auto 24% ' }}  />
                      </div>
                      <div class="column">
                           <Avatar class="avatar" src={process.env.PUBLIC_URL + "s_icon_7.png"} style={{ width: 150, height: 150,margin:'auto 1%' }}  />
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
        
            <div class="carousel" style={{ margin:'-58% 0%',color:'black',width:'100%',height:700}}  >
              <div class="carouselInner">
              <div class="centered">
                
                 TAKE A LOOK AT
              </div>
              <div class="centered1">
                   Our Favourite Deals
              </div>
              <div class="centered2">
              Find great experiences, trips, and activities at fantastic prices around the globe.
              </div>
              <div style={{ position: 'absolute',top:'300%',left: '44%', color:'white',fontsize: '2vh'}}>
                 <a  class="link-button1" href="#"><b>Read More</b></a>
              </div>
              <div  style={{ position: 'absolute',top:'300%',left: '28%', color:'white',fontsize: '2vh'}} >
                <Avatar  style={{ width: 70, height: 70,margin:'auto 24% ',backgroundColor:'white' }}>
                <a href="#"><FontAwesomeIcon icon="arrow-right" size="1x" color='black'></FontAwesomeIcon></a>
                </Avatar>
              </div>
              <div  style={{ position: 'absolute',top:'299.5%',left:'20%', color:'white',fontsize:'2vh'}} >
                <Avatar style={{ width:70, height:70,margin:'auto 24% ',backgroundColor:'white'}}>
                <a  href="#"><FontAwesomeIcon icon="arrow-left" size="1x" color='black'></FontAwesomeIcon></a>
                </Avatar>
              </div>
              
              </div>
            </div>

            <Paper  style={paperStyle}>
                  <Card class='card' >
                    <span >YOUR MONEY IS SECURE WITH US</span>
                    <div class="rt1-section-title">
                    Conversion Check
                    </div>
                    <p>Enquire the best for your medical travel</p>
                  
                   
                      
                  </Card>
                  <div  style={{margin:'auto 24%'}}>
                  <label style={{margin:'auto 0%',color:'black'}} >From Currency&nbsp; </label>
                         <select name="from currency" id="currency" placeholder ="Select Currency" style={{margin:'auto 0%',width:'200px',height:"50px"}} >
                         <option value="ALL">Albanian Lek</option>
                          <option value="XCD">East Caribbean Dollar</option>
                          <option value="EUR">Euro</option>
                          <option value="BBD">Barbadian Dollar</option>
                          <option value="BTN">Bhutanese Ngultrum</option>
                          <option value="BND">Brunei Dollar</option>
                          <option value="XAF">Central African CFA Franc</option>
                          <option value="CUP">Cuban Peso</option>
                          <option value="USD" selected="">United States Dollar</option>
                          <option value="FKP">Falkland Islands Pound</option>
                          <option value="GIP">Gibraltar Pound</option>
                          <option value="HUF">Hungarian Forint</option>
                          <option value="IRR">Iranian Rial</option>
                          <option value="JMD">Jamaican Dollar</option>
                          <option value="AUD">Australian Dollar</option>
                          <option value="LAK">Lao Kip</option>
                          <option value="LYD">Libyan Dinar</option>
                          <option value="MKD">Macedonian Denar</option>
                          <option value="XOF">West African CFA Franc</option>
                          <option value="NZD">New Zealand Dollar</option>
                          <option value="OMR">Omani Rial</option>
                          <option value="PGK">Papua New Guinean Kina</option>
                          <option value="RWF">Rwandan Franc</option>
                          <option value="WST">Samoan Tala</option>
                          <option value="RSD">Serbian Dinar</option>
                          <option value="SEK">Swedish Krona</option>
                          <option value="TZS">Tanzanian Shilling</option>
                          <option value="AMD">Armenian Dram</option>
                          <option value="BSD">Bahamian Dollar</option>
                          <option value="BAM">Bosnia And Herzegovina Konvertibilna Marka</option>
                          <option value="CVE">Cape Verdean Escudo</option>
                          <option value="CNY">Chinese Yuan</option>
                          <option value="CRC">Costa Rican Colon</option>
                          <option value="CZK">Czech Koruna</option>
                          <option value="ERN">Eritrean Nakfa</option>
                          <option value="GEL">Georgian Lari</option>
                          <option value="HTG">Haitian Gourde</option>
                          <option value="INR">Indian Rupee</option>
                          <option value="JOD">Jordanian Dinar</option>
                          <option value="KRW">South Korean Won</option>
                          <option value="LBP">Lebanese Lira</option>
                          <option value="MWK">Malawian Kwacha</option>
                          <option value="MRO">Mauritanian Ouguiya</option>
                          <option value="MZN">Mozambican Metical</option>
                          <option value="ANG">Netherlands Antillean Gulden</option>
                          <option value="PEN">Peruvian Nuevo Sol</option>
                          <option value="QAR">Qatari Riyal</option>
                          <option value="STD">Sao Tome And Principe Dobra</option>
                          <option value="SLL">Sierra Leonean Leone</option>
                          <option value="SOS">Somali Shilling</option>
                          <option value="SDG">Sudanese Pound</option>
                          <option value="SYP">Syrian Pound</option>
                          <option value="AOA">Angolan Kwanza</option>
                          <option value="AWG">Aruban Florin</option>
                          <option value="BHD">Bahraini Dinar</option>
                          <option value="BZD">Belize Dollar</option>
                          <option value="BWP">Botswana Pula</option>
                          <option value="BIF">Burundi Franc</option>
                          <option value="KYD">Cayman Islands Dollar</option>
                          <option value="COP">Colombian Peso</option>
                          <option value="DKK">Danish Krone</option>
                          <option value="GTQ">Guatemalan Quetzal</option>
                          <option value="HNL">Honduran Lempira</option>
                          <option value="IDR">Indonesian Rupiah</option>
                          <option value="ILS">Israeli New Sheqel</option>
                          <option value="KZT">Kazakhstani Tenge</option>
                          <option value="KWD">Kuwaiti Dinar</option>
                          <option value="LSL">Lesotho Loti</option>
                          <option value="MYR">Malaysian Ringgit</option>
                          <option value="MUR">Mauritian Rupee</option>
                          <option value="MNT">Mongolian Tugrik</option>
                          <option value="MMK">Myanma Kyat</option>
                          <option value="NGN">Nigerian Naira</option>
                          <option value="PAB">Panamanian Balboa</option>
                          <option value="PHP">Philippine Peso</option>
                          <option value="RON">Romanian Leu</option>
                          <option value="SAR">Saudi Riyal</option>
                          <option value="SGD">Singapore Dollar</option>
                          <option value="ZAR">South African Rand</option>
                          <option value="SRD">Surinamese Dollar</option>
                          <option value="TWD">New Taiwan Dollar</option>
                          <option value="TOP">Paanga</option>
                          <option value="VEF">Venezuelan Bolivar</option>
                          <option value="DZD">Algerian Dinar</option>
                          <option value="ARS">Argentine Peso</option>
                          <option value="AZN">Azerbaijani Manat</option>
                          <option value="BYR">Belarusian Ruble</option>
                          <option value="BOB">Bolivian Boliviano</option>
                          <option value="BGN">Bulgarian Lev</option>
                          <option value="CAD">Canadian Dollar</option>
                          <option value="CLP">Chilean Peso</option>
                          <option value="CDF">Congolese Franc</option>
                          <option value="DOP">Dominican Peso</option>
                          <option value="FJD">Fijian Dollar</option>
                          <option value="GMD">Gambian Dalasi</option>
                          <option value="GYD">Guyanese Dollar</option>
                          <option value="ISK">Icelandic Króna</option>
                          <option value="IQD">Iraqi Dinar</option>
                          <option value="JPY">Japanese Yen</option>
                          <option value="KPW">North Korean Won</option>
                          <option value="LVL">Latvian Lats</option>
                          <option value="CHF">Swiss Franc</option>
                          <option value="MGA">Malagasy Ariary</option>
                          <option value="MDL">Moldovan Leu</option>
                          <option value="MAD">Moroccan Dirham</option>
                          <option value="NPR">Nepalese Rupee</option>
                          <option value="NIO">Nicaraguan Cordoba</option>
                          <option value="PKR">Pakistani Rupee</option>
                          <option value="PYG">Paraguayan Guarani</option>
                          <option value="SHP">Saint Helena Pound</option>
                          <option value="SCR">Seychellois Rupee</option>
                          <option value="SBD">Solomon Islands Dollar</option>
                          <option value="LKR">Sri Lankan Rupee</option>
                          <option value="THB">Thai Baht</option>
                          <option value="TRY">Turkish New Lira</option>
                          <option value="AED">UAE Dirham</option>
                          <option value="VUV">Vanuatu Vatu</option>
                          <option value="YER">Yemeni Rial</option>
                          <option value="AFN">Afghan Afghani</option>
                          <option value="BDT">Bangladeshi Taka</option>
                          <option value="BRL">Brazilian Real</option>
                          <option value="KHR">Cambodian Riel</option>
                          <option value="KMF">Comorian Franc</option>
                          <option value="HRK">Croatian Kuna</option>
                          <option value="DJF">Djiboutian Franc</option>
                          <option value="EGP">Egyptian Pound</option>
                          <option value="ETB">Ethiopian Birr</option>
                          <option value="XPF">CFP Franc</option>
                          <option value="GHS">Ghanaian Cedi</option>
                          <option value="GNF">Guinean Franc</option>
                          <option value="HKD">Hong Kong Dollar</option>
                          <option value="XDR">Special Drawing Rights</option>
                          <option value="KES">Kenyan Shilling</option>
                          <option value="KGS">Kyrgyzstani Som</option>
                          <option value="LRD">Liberian Dollar</option>
                          <option value="MOP">Macanese Pataca</option>
                          <option value="MVR">Maldivian Rufiyaa</option>
                          <option value="MXN">Mexican Peso</option>
                          <option value="NAD">Namibian Dollar</option>
                          <option value="NOK">Norwegian Krone</option>
                          <option value="PLN">Polish Zloty</option>
                          <option value="RUB">Russian Ruble</option>
                          <option value="SZL">Swazi Lilangeni</option>
                          <option value="TJS">Tajikistani Somoni</option>
                          <option value="TTD">Trinidad and Tobago Dollar</option>
                          <option value="UGX">Ugandan Shilling</option>
                          <option value="UYU">Uruguayan Peso</option>
                          <option value="VND">Vietnamese Dong</option>
                          <option value="TND">Tunisian Dinar</option>
                          <option value="UAH">Ukrainian Hryvnia</option>
                          <option value="UZS">Uzbekistani Som</option>
                          <option value="TMT">Turkmenistan Manat</option>
                          <option value="GBP">British Pound</option>
                          <option value="ZMW">Zambian Kwacha</option>
                          <option value="BTC">Bitcoin</option>
                          <option value="BYN">New Belarusian Ruble</option>
                          </select>
                   &nbsp;  &nbsp;
                  <label style={{margin:'auto 0%',color:'black'}} >Amount &nbsp;</label>
                  <input style={{width:"90px",height:"50px"}} type="text" class="form-control" name="amount" id="amount_id" required=""></input>  &nbsp;  &nbsp;   
                  <label  style={{margin:'auto 0%',color:'black'}}>To Currency &nbsp;</label>
                  <select class="form-control" id="to_currency_id" name="to_currency" required="" style={{width:"200px",height:"50px"}}>
                         <option value="ALL">Albanian Lek</option>
                          <option value="XCD">East Caribbean Dollar</option>
                          <option value="EUR">Euro</option>
                          <option value="BBD">Barbadian Dollar</option>
                          <option value="BTN">Bhutanese Ngultrum</option>
                          <option value="BND">Brunei Dollar</option>
                          <option value="XAF">Central African CFA Franc</option>
                          <option value="CUP">Cuban Peso</option>
                          <option value="USD">United States Dollar</option>
                          <option value="FKP">Falkland Islands Pound</option>
                          <option value="GIP">Gibraltar Pound</option>
                          <option value="HUF">Hungarian Forint</option>
                          <option value="IRR">Iranian Rial</option>
                          <option value="JMD">Jamaican Dollar</option>
                          <option value="AUD">Australian Dollar</option>
                          <option value="LAK">Lao Kip</option>
                          <option value="LYD">Libyan Dinar</option>
                          <option value="MKD">Macedonian Denar</option>
                          <option value="XOF">West African CFA Franc</option>
                          <option value="NZD">New Zealand Dollar</option>
                          <option value="OMR">Omani Rial</option>
                          <option value="PGK">Papua New Guinean Kina</option>
                          <option value="RWF">Rwandan Franc</option>
                          <option value="WST">Samoan Tala</option>
                          <option value="RSD">Serbian Dinar</option>
                          <option value="SEK">Swedish Krona</option>
                          <option value="TZS">Tanzanian Shilling</option>
                          <option value="AMD">Armenian Dram</option>
                          <option value="BSD">Bahamian Dollar</option>
                          <option value="BAM">Bosnia And Herzegovina Konvertibilna Marka</option>
                          <option value="CVE">Cape Verdean Escudo</option>
                          <option value="CNY">Chinese Yuan</option>
                          <option value="CRC">Costa Rican Colon</option>
                          <option value="CZK">Czech Koruna</option>
                          <option value="ERN">Eritrean Nakfa</option>
                          <option value="GEL">Georgian Lari</option>
                          <option value="HTG">Haitian Gourde</option>
                          <option value="INR" selected="">Indian Rupee</option>
                          <option value="JOD">Jordanian Dinar</option>
                          <option value="KRW">South Korean Won</option>
                          <option value="LBP">Lebanese Lira</option>
                          <option value="MWK">Malawian Kwacha</option>
                          <option value="MRO">Mauritanian Ouguiya</option>
                          <option value="MZN">Mozambican Metical</option>
                          <option value="ANG">Netherlands Antillean Gulden</option>
                          <option value="PEN">Peruvian Nuevo Sol</option>
                          <option value="QAR">Qatari Riyal</option>
                          <option value="STD">Sao Tome And Principe Dobra</option>
                          <option value="SLL">Sierra Leonean Leone</option>
                          <option value="SOS">Somali Shilling</option>
                          <option value="SDG">Sudanese Pound</option>
                          <option value="SYP">Syrian Pound</option>
                          <option value="AOA">Angolan Kwanza</option>
                          <option value="AWG">Aruban Florin</option>
                          <option value="BHD">Bahraini Dinar</option>
                          <option value="BZD">Belize Dollar</option>
                          <option value="BWP">Botswana Pula</option>
                          <option value="BIF">Burundi Franc</option>
                          <option value="KYD">Cayman Islands Dollar</option>
                          <option value="COP">Colombian Peso</option>
                          <option value="DKK">Danish Krone</option>
                          <option value="GTQ">Guatemalan Quetzal</option>
                          <option value="HNL">Honduran Lempira</option>
                          <option value="IDR">Indonesian Rupiah</option>
                          <option value="ILS">Israeli New Sheqel</option>
                          <option value="KZT">Kazakhstani Tenge</option>
                          <option value="KWD">Kuwaiti Dinar</option>
                          <option value="LSL">Lesotho Loti</option>
                          <option value="MYR">Malaysian Ringgit</option>
                          <option value="MUR">Mauritian Rupee</option>
                          <option value="MNT">Mongolian Tugrik</option>
                          <option value="MMK">Myanma Kyat</option>
                          <option value="NGN">Nigerian Naira</option>
                          <option value="PAB">Panamanian Balboa</option>
                          <option value="PHP">Philippine Peso</option>
                          <option value="RON">Romanian Leu</option>
                          <option value="SAR">Saudi Riyal</option>
                          <option value="SGD">Singapore Dollar</option>
                          <option value="ZAR">South African Rand</option>
                          <option value="SRD">Surinamese Dollar</option>
                          <option value="TWD">New Taiwan Dollar</option>
                          <option value="TOP">Paanga</option>
                          <option value="VEF">Venezuelan Bolivar</option>
                          <option value="DZD">Algerian Dinar</option>
                          <option value="ARS">Argentine Peso</option>
                          <option value="AZN">Azerbaijani Manat</option>
                          <option value="BYR">Belarusian Ruble</option>
                          <option value="BOB">Bolivian Boliviano</option>
                          <option value="BGN">Bulgarian Lev</option>
                          <option value="CAD">Canadian Dollar</option>
                          <option value="CLP">Chilean Peso</option>
                          <option value="CDF">Congolese Franc</option>
                          <option value="DOP">Dominican Peso</option>
                          <option value="FJD">Fijian Dollar</option>
                          <option value="GMD">Gambian Dalasi</option>
                          <option value="GYD">Guyanese Dollar</option>
                          <option value="ISK">Icelandic Króna</option>
                          <option value="IQD">Iraqi Dinar</option>
                          <option value="JPY">Japanese Yen</option>
                          <option value="KPW">North Korean Won</option>
                          <option value="LVL">Latvian Lats</option>
                          <option value="CHF">Swiss Franc</option>
                          <option value="MGA">Malagasy Ariary</option>
                          <option value="MDL">Moldovan Leu</option>
                          <option value="MAD">Moroccan Dirham</option>
                          <option value="NPR">Nepalese Rupee</option>
                          <option value="NIO">Nicaraguan Cordoba</option>
                          <option value="PKR">Pakistani Rupee</option>
                          <option value="PYG">Paraguayan Guarani</option>
                          <option value="SHP">Saint Helena Pound</option>
                          <option value="SCR">Seychellois Rupee</option>
                          <option value="SBD">Solomon Islands Dollar</option>
                          <option value="LKR">Sri Lankan Rupee</option>
                          <option value="THB">Thai Baht</option>
                          <option value="TRY">Turkish New Lira</option>
                          <option value="AED">UAE Dirham</option>
                          <option value="VUV">Vanuatu Vatu</option>
                          <option value="YER">Yemeni Rial</option>
                          <option value="AFN">Afghan Afghani</option>
                          <option value="BDT">Bangladeshi Taka</option>
                          <option value="BRL">Brazilian Real</option>
                          <option value="KHR">Cambodian Riel</option>
                          <option value="KMF">Comorian Franc</option>
                          <option value="HRK">Croatian Kuna</option>
                          <option value="DJF">Djiboutian Franc</option>
                          <option value="EGP">Egyptian Pound</option>
                          <option value="ETB">Ethiopian Birr</option>
                          <option value="XPF">CFP Franc</option>
                          <option value="GHS">Ghanaian Cedi</option>
                          <option value="GNF">Guinean Franc</option>
                          <option value="HKD">Hong Kong Dollar</option>
                          <option value="XDR">Special Drawing Rights</option>
                          <option value="KES">Kenyan Shilling</option>
                          <option value="KGS">Kyrgyzstani Som</option>
                          <option value="LRD">Liberian Dollar</option>
                          <option value="MOP">Macanese Pataca</option>
                          <option value="MVR">Maldivian Rufiyaa</option>
                          <option value="MXN">Mexican Peso</option>
                          <option value="NAD">Namibian Dollar</option>
                          <option value="NOK">Norwegian Krone</option>
                          <option value="PLN">Polish Zloty</option>
                          <option value="RUB">Russian Ruble</option>
                          <option value="SZL">Swazi Lilangeni</option>
                          <option value="TJS">Tajikistani Somoni</option>
                          <option value="TTD">Trinidad and Tobago Dollar</option>
                          <option value="UGX">Ugandan Shilling</option>
                          <option value="UYU">Uruguayan Peso</option>
                          <option value="VND">Vietnamese Dong</option>
                          <option value="TND">Tunisian Dinar</option>
                          <option value="UAH">Ukrainian Hryvnia</option>
                          <option value="UZS">Uzbekistani Som</option>
                          <option value="TMT">Turkmenistan Manat</option>
                          <option value="GBP">British Pound</option>
                          <option value="ZMW">Zambian Kwacha</option>
                          <option value="BTC">Bitcoin</option>
                          <option value="BYN">New Belarusian Ruble</option>
                  </select> &nbsp;  &nbsp;
                  </div><br/>
                  <div class="form-group classWithPad" style={{margin:'auto 28%'}} >
                     <label style={{margin:'auto 0%',color:'black'}}>Converted Amount&nbsp;</label>
                     <input style={{width:"400px",height:'50px'}} type="text" class="form-control" id="converted_amount_id" readonly="" />
                     &nbsp;&nbsp;
                     <button  class="link-button1" style={{width:"18%",height:'18%'}}><b>Convert</b></button>
                   
                 </div>
            </Paper>
           
            <Paper style={{ margin:"-90%  0%",boxShadow:'none' }} >

              <img  style={{height:"120%", width:"100%"}}class="img" src={process.env.PUBLIC_URL + "/portfoliobg.png"}  />
               <div style={{margin:"-69%  44%",color:'white',fontFamily:'arial', textAlign: 'center',justifyContent: 'center'}}><h2><b> GLIMPSE OF</b></h2></div><br/>

               <div style={{margin:"67%  20%",color:'white',fontFamily:'arial', textAlign: 'center',justifyContent: 'center'}}>
               <div class="rt1-section-title" style={{color:'white'}}>
               Top Medical Tourism <br/>Destinations
                    </div>
                    <p  style={{color:'white'}}>We offer the best services and a list of treatment centres as per your requirement. Find the best hospitals<br/> and treatment centres in India and around the globe.</p><br/>
               <button  class="button-71">Mumbai</button> <space/><space/>
               <button  class="button-hover">Delhi</button> <space/><space/>
               <button  class="button-hover">Kolkata</button> <space/><space/>
               <button  class="button-hover">Pune</button> <space/><space/>
               <button  class="button-hover">Bangalore</button> <space/><space/>
               <button  class="button-hover">Hyderabad</button> <space/><space/>
               <button  class="button-hover">Ahmedabad</button> <space/><space/><br/>
             </div>
             <div style={{ margin:'-66% 20%',justifyContent:'center',textAlign:'center'}}>
             <div class="row">
                <div class="column1">
                   <img  src={process.env.PUBLIC_URL + "/11.jpg"}  style={{height:'100%',width:"100%"}} />
                </div>
                <div class="column1">
                   <img  src={process.env.PUBLIC_URL + "/12.jpg"}  style={{height:'100%',width:"100%" }}/>
                </div>
                <div class="column1">
                    <img  src={process.env.PUBLIC_URL + "/13.jpg"} style={{height:'100%',width:"100%"}}/>
                </div>
                
              </div>
              <div class="row">
                <div class="column1">
                   <img  src={process.env.PUBLIC_URL + "/14.jpg"} style={{height:'100%',width:"100%"}} />
                </div>
                <div class="column1">
                   <img  src={process.env.PUBLIC_URL + "/15.jpg"} style={{height:'100%',width:"100%" }}/>
                </div>
                <div class="column1">
                    <img  src={process.env.PUBLIC_URL + "/16.jpg"}  style={{height:'100%',width:"100%"}}/>
                </div>
                
              </div>
            
               </div>
               
               
            </Paper> 
            {/* <Paper>
            <div className='footer-container'>
    
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Company Info</h2>
            <Link to='#'>Compliance for International Patient</Link>
            <Link to='/'>About Us</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Customer Reviews</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Business License</Link>
          
          </div>
          <div class='footer-link-items'>
            <h2>Work With Us</h2>
            <Link to='/'>Become Partner</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Become Affiliate</Link>
            <Link to='/'>Associations</Link>
            <Link to='/'>Advertise with us</Link>
            <Link to='/'>Retirement Plan</Link>
            <Link to='/'>Travel APIs</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>My Account</h2>
            <Link to='/'>Manage Your Account</Link>
            <Link to='/'>Build your own trip</Link>
            <Link to='/'>Order Status</Link>
            <Link to='/'>Booking Guide</Link>
            <Link to='/'>Travel Insurance &amp; Safety Guide</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Plan Your Trip</h2>
            <Link to='/'>Special Offers</Link>
            <Link to='/'>Hotels</Link>
            <Link to='/'>Flights</Link>
            <Link to='/'>Tour Packages</Link>
            <Link to='/'>Accommodations</Link>
            <Link to='/'>Transportation</Link>
           
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
            </Paper> */}
            </>
           )}
         </div>
      
       
    );
};
  
export default Navbar;
        