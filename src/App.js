import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import { Fragment } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Saparecode from './components/CodeSection/saparecode';
import Moneypage from './pages/moneypage';
import Notepage from './pages/notepage';
import Contactpage from './pages/contactpage';
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
        <Route path="/saparecode" component={Saparecode} />
        <Route path="/contactme" component={Contactpage} />
      </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
