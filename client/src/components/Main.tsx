import Navbar from '../components/Navbar';
import Inventory from '../components/inventory/Inventory'
import Event from '../components/event/Event'
import AddInventory from '../components/AddInventory'
import Auth from '../components/auth/Auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DataProvider } from '../contextAPI/DataContext'
import UseInventory from '../components/UseInventory';
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { SetVerifyContext, VerifyContext, VerifyProvider } from '../contextAPI/VerifyContext'


interface User {
    userName: string
  }

const Main = () => {

    const [user, setUser] = useState<User>({userName: ''})
    const [verify, setVerify] = useContext(VerifyContext)

    const validateUser =  async () => {
      try {
        const verify = await axios.get('/auth/')
        if (verify.data.user_name) {
          // Set user name, and verify.
          setUser(verify.data.user_name)
          setVerify(true)
          console.log('true')
        } else if (verify.data.msg){
          setVerify(false)
          console.log('false')
        }
      } catch(error) {
        console.log(error)
      }
    }

    useEffect(() => {
      validateUser() 
    }, [])
  
    return (
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
    )
}

export default Main
