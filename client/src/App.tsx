import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Brew from './components/database/Brew'
import Inventory from './components/database/Inventory';
import Purchase from './components/database/Purchase';
import Event from './components/database/Event';
import moment from 'moment'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const today: string = moment().format('YYYY-MM-DD');
  const [brewInfo, setBrewInfo] = useState([])
  const [inventoryInfo, setInventoryInfo] = useState([])
  const [purchaseInfo, setPurchaseInfo] = useState([])
  const [eventInfo, setEventInfo] = useState([])

  const getBrewInfo = async () => {
      try {
          const res = await axios.get('brew/data')
          const brewInfo = await res.data
          brewInfo.forEach((item:any) => item.brew_date = moment().format('YYYY-MM-DD'))
          console.log(brewInfo)
          await setBrewInfo(brewInfo)
      } catch(error) {
          console.log(error)
      }
  };

  const getInventoryInfo = async () => {
      try {
          const res = await axios.get('/inventory/data')
          const inventoryInfo = res.data
          inventoryInfo.forEach((item:any) => item.expiration_date = moment().format('YYYY-MM-DD'))
          await setInventoryInfo(inventoryInfo)
      } catch(error) {
          console.log(error)
      }
  };

  const getPurchaseInfo = async () => {
    try {
        const res = await axios.get('/purchase/data')
        const purchaseInfo = res.data
        purchaseInfo.forEach((item:any) => {
          item.purchase_date = moment().format('YYYY-MM-DD')
          item.expiration_date = moment().format('YYYY-MM-DD')
        })
        await setPurchaseInfo(purchaseInfo)
    } catch(error) {
        console.log(error)
    }
};

const getEventInfo = async () => {
  try {
      const res = await axios.get('/event/data')
      const eventInfo = res.data
      eventInfo.forEach((item:any) => item.event_date = moment().format('YYYY-MM-DD'))
      await setEventInfo(eventInfo)
  } catch(error) {
      console.log(error)
  }
};

  useEffect(() =>
  {
      getInventoryInfo()
      getBrewInfo()
      getPurchaseInfo()
      getEventInfo()
  }, []);


  return (
    <Router >
      <h1 className="Header">Ggeek Inventory Tracker</h1>
      <Navbar />
    <Switch>
        <Route exact path="/inventory">
          <Inventory inventoryInfo={inventoryInfo} getInventoryInfo={getInventoryInfo} today={today} brewInfo={brewInfo}/>
        </Route>
        <Route exact path="/brew">
          <Brew today={today} brewInfo={brewInfo} getBrewInfo={getBrewInfo}/>
        </Route>
        <Route exact path="/purchase">
          <Purchase purchaseInfo={purchaseInfo} getPurchaseInfo={getPurchaseInfo} inventoryInfo={inventoryInfo} today={today}/>
        </Route>
        <Route exact path="/event">
          <Event eventInfo={eventInfo} getEventInfo={getEventInfo} inventoryInfo={inventoryInfo} brewInfo={brewInfo} purchaseInfo={purchaseInfo} />
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
