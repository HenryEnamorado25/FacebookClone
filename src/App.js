import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import Widgets from './Widgets';
import {useStateValue} from "./StateProvider";


function App() {
  const [{user},dispatch]= useStateValue();
  console.log(user);
  return (
    <div className="app">
      {!user ? (
      <Login />
      ):(
        <>
              <Header />
      
              <div className="app__body">
                <SideBar/>
                <Feed/>
                <Widgets/>
              </div>
        </>
      )}
              
        
    </div>
  );
}

export default App;
