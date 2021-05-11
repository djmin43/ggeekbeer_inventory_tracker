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
import { DataProvider } from './DataContext'


function App() {
  return (
    <DataProvider>
    <Router >
      <h1 className="Header">Ggeek Inventory Tracker</h1>
      <Navbar />
    <Switch>
        <Route exact path="/inventory">
          <Inventory />
        </Route>
        <Route exact path="/brew">
          <Brew />
        </Route>
        <Route exact path="/purchase">
          <Purchase />
        </Route>
        <Route exact path="/event">
          <Event />
        </Route>
    </Switch>
    </Router>
    </DataProvider>

  );
}

export default App;
