import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mission from './pages/Mission';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import PlanYourTrip from './pages/PlanYourTrip';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";
// import getInfo from './utils/API';

function App() {


  

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/PlanYourTrip' component={PlanYourTrip} />
          <Route path='/mission' component={Mission} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}



export default App;
