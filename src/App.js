import React from 'react';
//import AddUser from './component/Users/AddUser';
//import UserList from './component/Users/UserList';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Forgot from './component/Login/Forgot';
import Home from './component/Login/Home';
import Dashboard from './component/Dashboard/Dashboard';

function App(){
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
                 <Route exact path="/" component={Dashboard}/>
                 <Route exact path="/Register" component={Login}/>
                 <Route exact path="/SignUp" component={SignUp} />
                 <Route exact path="/Forgot" component={Forgot}/>
                 <Route exact path="/Home" component={Home}/>
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