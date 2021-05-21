import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mission from './components/pages/Mission';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import PlanYourTrip from './components/pages/PlanYourTrip';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        
          <Route path='/' exact component={Home} />
          <Route path='/planyourtrip' component={PlanYourTrip} />
          <Route path='/mission' component={Mission} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}



export default App;
