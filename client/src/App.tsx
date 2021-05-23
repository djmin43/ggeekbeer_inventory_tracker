import './App.css';
import Navbar from './components/Navbar';
import Inventory from './components/inventory/Inventory'
import Event from './components/event/Event'
import AddInventory from './components/AddInventory'
import Auth from './components/auth/Auth'
import User from './components/user/User'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import UseInventory from './components/UseInventory';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { DataProvider } from './contextAPI/DataContext'
import { BrowserRouter } from 'react-router-dom'

interface UserName {
  userName: string
}

function App() {

  // This also works to verify if the user is logged in
  const [userName, setUserName] = useState<UserName>({userName: ''})

  const verifyUser =  async () => {
    try {
      const getVerify = await axios.get('/auth/verify')
      if (getVerify.data.user_name) {
        // Set user name, and verify.
        setUserName(getVerify.data.user_name)
        console.log('verify success')
      } else if (getVerify.data.msg === "unauthorized"){
        setUserName({userName: ''})
      }
    } catch(error) {
      setUserName({userName: ''})
      console.log(error)
    }
  }

  useEffect(() => {
    verifyUser() 
  }, [])

  return (
    <div className="app">

    <BrowserRouter>
      <DataProvider>
        <Router >
          <h1 className="Header">Ggeek Inventory Tracker</h1>
          {/* Conditional Rendering on verification */}
          {userName.userName === '' ? <Auth /> : 
          <>
            <Navbar />
            <Switch >
              <Route exact path="/inventory">
                <Inventory />
              </Route>
              <Route exact path="/event">
                <Event />
              </Route>
              <Route exact path="/add">
                <AddInventory />
              </Route>
              <Route exact path="/use">
                <UseInventory />
              </Route>

              <Route exact path="/user">
                <User userName={userName}/>
              </Route>
            </Switch>
            </>
          }

        </Router>
      </DataProvider>
   </BrowserRouter>
   </div>


  );
}

export default App;
