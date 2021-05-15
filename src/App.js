import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
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
          <Route path='/services' component={Services} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}



export default App;
