import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import { Fragment } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Notecode from './components/CodeSection/notecode';
import Saparecode from './components/CodeSection/saparecode';
import Moneypage from './pages/moneypage';
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
        <Route path="/notecode" component={Notecode} />
        <Route path="/saparecode" component={Saparecode} />
        <Route path="/contactme" component={Contactpage} />
      </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
