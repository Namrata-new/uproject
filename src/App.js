import React from 'react';
//import AddUser from './component/Users/AddUser';
//import UserList from './component/Users/UserList';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import './App.css';


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
  <div >
   {/* <AddUser onAddUser={addUserHandler}/>
    <UserList users={usersList}/>  */}
     <SignUp/>
    
    
  </div>
  );
}

export default App;