import React ,{useEffect}from 'react';
import './component/fontawesomeicon';
//import AddUser from './component/Users/AddUser';
//import UserList from './component/Users/UserList';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Forgot from './component/Register/Forgot';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import Signin from './component/Register/Signin';
import Navbar from './component/Dashboard/Navbar';
import AboutUs from './component/AboutUs/AboutUs';
import Affiliateprogram from './component/Affiliateprogram/Affiliateprogram';
import Service from './component/Service/Service';
import Help from './component/Help/Help';
import Howitworks from './component/Howitworks/Howitworks';
import Standard from './component/Standard/Standard';
import Premium from './component/Premium/Premium';
import Compare from './component/Compare/Compare';
import Blog from './component/Blog/Blog';
import Blog1 from './component/Blog/Blog1';
import Blog2 from './component/Blog/Blog2';
import Blog3 from './component/Blog/Blog3';
import Contactus from './component/Contactus/Contactus';
import Support from './component/Support/Support';
import Footer from './component/Footer/Footer';
import Convertion from './component/Convertion/Convertion';
import Dashboard from './component/Dashboard/Dashboard';
function App(){
  useEffect(() => {
    document.title = "eHealthflex Technologis- Medical Tourism ";
    
  }, [])
  /* const [usersList,setusersList ]= useState([]);

  const addUserHandler=(uName,uAge)=>{
    setusersList((prevUserList)=>{
        return [
          ...prevUserList,
        {name:uName,age:uAge,id:Math.random().toString()},
        ];
      });
  }; */
  return (
    
      <BrowserRouter>
          <div>
           
             <Switch>
                 <Route exact path="/" component={Navbar}/>

                 <Route exact path="/Register" component={Register}/>
                 <Route exact path="/Signin" component={Signin} />
                 <Route exact path="/Forgot" component={Forgot}/>
                 <Route exact path="/Home" component={Home}/>
                 <Route exact path="/AboutUs" component={AboutUs}/>
                 <Route exact path="/Affiliateprogram" component={Affiliateprogram}/>
                 <Route exact path="/Service" component={Service}/>
                 <Route exact path="/Help" component={Help} />
                 <Route exact path="/Howitworks" component={Howitworks}/>
                 <Route exact path="/Standard" component={Standard}/>
                 <Route exact path="/Premium" component={Premium}/>
                 <Route exact path="/Compare" component={Compare}/>
                 <Route exact path="/Blog" component={Blog}/>
                 <Route exact path="/Blog1" component={Blog1}/>
                 <Route exact path="/Blog2" component={Blog2} />
                 <Route exact path="/Blog3" component={Blog3}/>
                 <Route exact path="/Contactus" component={Contactus}/>
                 <Route exact path="/Support" component={Support} />
                
             </Switch>
         </div>
      </BrowserRouter>
     
      
  );
}

export default App;

// {/* <div >
//    {/* <AddUser onAddUser={addUserHandler}/>
//     <UserList users={usersList}/>  */}
//      <Login/>
    
    
//   </div> */}