import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import Moneycode from './components/CodeSection/moneycode';
import { Fragment } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Notecode from './components/CodeSection/notecode';
import Saparecode from './components/CodeSection/saparecode';

function App() {
  return (
    <Router>
      <Fragment>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/moneycode" component={Moneycode} />
        <Route path="/notecode" component={Notecode} />
        <Route path="/saparecode" component={Saparecode} />
      </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
