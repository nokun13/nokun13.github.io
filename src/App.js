import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import { Fragment } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Moneypage from './pages/moneypage';
import Notepage from './pages/notepage';
import Contactpage from './pages/contactpage';
import Saparepage from './pages/saparepage';
require('dotenv').config();

function App() {
  return (
    <Router>
      <Fragment>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/moneycode" component={Moneypage} />
        <Route path="/notecode" component={Notepage} />
        <Route path="/saparecode" component={Saparepage} />
        <Route path="/contactme" component={Contactpage} />
      </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
