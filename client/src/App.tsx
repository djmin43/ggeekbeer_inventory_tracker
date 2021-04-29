import './App.css';
import Navbar from './components/Navbar';
import Inventory from './components/Inventory';
import Brew from './components/Brew';
import Purchase from './components/Purchase';
import Control from './components/Control'
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
        <Route exact path="/brew">
          <Brew />
        </Route>
        <Route exact path="/purchase">
          <Purchase />
        </Route>
        <Route exact path="/control">
          <Control />
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
