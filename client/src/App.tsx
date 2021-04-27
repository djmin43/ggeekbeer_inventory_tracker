import './App.css';
import Navbar from './components/Navbar';
import Inventory from './components/Inventory';
import BrewHistory from './components/BrewHistory';
import PurchaseHistory from './components/PurchaseHistory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router >
      <h1 className="Header">Ggeek Inventory Tracker</h1>
      <Navbar />
    <Switch>
        <Route exact path="/inventory">
          <Inventory />
        </Route>
        <Route exact path="/add_brew">
          <div>Add Brew Form</div>
        </Route>
        <Route exact path="/add_purchase">
          <div>Add Purchase Form</div>
        </Route>
        <Route exact path="/brew_history">
          <BrewHistory />
        </Route>
        <Route exact path="/purchase_history">
          <PurchaseHistory />
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
