import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Brew from './components/database/Brew'
import Inventory from './components/database/Inventory';
import Purchase from './components/database/Purchase';
import Event from './components/database/Event';
import AddBrew from './components/brew/AddBrew';
import UseInventory from './components/brew/UseInventory';
import NewPurchase from './components/purchase/NewPurchase';
import AddInventory from './components/purchase/AddInventory';
import moment from 'moment'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const today: string = moment().format('YYYY-MM-DD');

  const [brewInfo, setBrewInfo] = useState([]);
  const [inventoryInfo, setInventoryInfo] = useState([]);
  const [purchaseInfo, setPurchaseInfo] = useState([]);
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
          const inventoryInfo = await axios.get('inventory/data');
          await setInventoryInfo(inventoryInfo.data)
      } catch(error) {
          console.log(error)
      }
  };

  const getPurchaseInfo = async () => {
    try {
        const purchaseInfo = await axios.get('purchase/data');
        await setPurchaseInfo(purchaseInfo.data)
    } catch(error) {
        console.log(error)
    }
};

const getEventInfo = async () => {
  try {
      const eventInfo = await axios.get('event/data');
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
        <Route exact path="/database/inventory">
          <Inventory inventoryInfo={inventoryInfo} brewInfo={brewInfo} purchaseInfo={purchaseInfo} />
        </Route>
        <Route exact path="/database/brew">
          <Brew brewInfo={brewInfo} />
        </Route>
        <Route exact path="/database/purchase">
          <Purchase purchaseInfo={purchaseInfo}/>
        </Route>
        <Route exact path="/database/event">
          <Event eventInfo={eventInfo} inventoryInfo={inventoryInfo} brewInfo={brewInfo} purchaseInfo={purchaseInfo} />
        </Route>
        <Route exact path="/brew/add_brew">
          <AddBrew today={today} />
        </Route>
        <Route exact path="/brew/use_inventory">
          <UseInventory today={today} brewInfo={brewInfo} inventoryInfo={inventoryInfo} />
        </Route>
        <Route exact path="/purchase/new_purchase">
          <NewPurchase today={today} inventoryInfo={inventoryInfo} />
        </Route>
        <Route exact path="/purchase/add_inventory">
          <AddInventory today={today} inventoryInfo={inventoryInfo} />
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
