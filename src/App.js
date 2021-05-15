import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mission from './components/pages/Mission';
import SignUp from './components/pages/SignUp';
import Guides from './components/pages/Guides';
import Map from './components/pages/Map';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/Map' component={Map} />
          <Route path='/' exact component={Home} />
          <Route path='/mission' component={Mission} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/guides' component={Guides} />
        </Switch>
      </Router>
    </>
  );
}



export default App;
