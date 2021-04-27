import './App.css';
import Navbar from './components/Navbar'
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
          <div>Inventory Table</div>
        </Route>
        <Route exact path="/add_brew">
          <div>Add Brew Form</div>
        </Route>
        <Route exact path="/add_purchase">
          <div>Add Purchase Form</div>
        </Route>
        <Route exact path="/brew_history">
          <div>Brew History Table</div>
        </Route>
        <Route exact path="/purchase_history">
          <div>Purchase History Table</div>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
