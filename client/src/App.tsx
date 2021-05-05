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
          const brewInfo = await axios.get('brew/data');
          await setBrewInfo(brewInfo.data)
      } catch(error) {
          console.log(error)
      }
  };

  const getInventoryInfo = async () => {
      try {
          const inventoryInfo = await axios.get('/inventory/data');
          await setInventoryInfo(inventoryInfo.data)
      } catch(error) {
          console.log(error)
      }
  };

  const getPurchaseInfo = async () => {
    try {
        const purchaseInfo = await axios.get('/purchase/data');
        await setPurchaseInfo(purchaseInfo.data)
    } catch(error) {
        console.log(error)
    }
};

const getEventInfo = async () => {
  try {
      const eventInfo = await axios.get('/event/data');
      await setEventInfo(eventInfo.data)
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
