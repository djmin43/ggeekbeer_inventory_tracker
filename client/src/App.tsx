import './App.css';
import Navbar from './components/Navbar';
import Inventory from './components/inventory/Inventory'
import Event from './components/event/Event'
import AddInventory from './components/AddInventory'
import Auth from './components/auth/Auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DataProvider } from './DataContext'
import UseInventory from './components/UseInventory';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

interface User {
  userName: string
}

function App() {

  const [user, setUser] = useState<User>({userName: ''})
  const [verified, setVerified] = useState<boolean>(false)

  const verify =  async () => {
    try {
      const verify = await axios.get('/auth/')
      if (verify.data.user_name) {
        // Set user name, and verify.
        setUser(verify.data.user_name)
        setVerified(true)
      } else if (verify.data.msg){
        setVerified(false)
      }
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
  verify()
  }, [])


  return (
    <DataProvider>
      <Router >
        <h1 className="Header">Ggeek Inventory Tracker</h1>
        <Navbar />
        <Switch>
          <Route exact path="/auth">
              <Auth />
            </Route>
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
        </Switch>
      </Router>
    </DataProvider>

  );
}

export default App;
