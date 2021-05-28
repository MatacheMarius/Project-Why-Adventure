import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mission from './pages/Mission';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Trips from './pages/Trips';
import PlanYourTrip from './pages/PlanYourTrip';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from "./pages/Account";
// import axios from "axios";
// import getInfo from './utils/API';
import { LoginProvider } from './utils/GlobalState'
import WatchAuthenticatedUser from './components/user/WatchAuthenticatedUser'

function App() {


  

  return (
    <LoginProvider>
      <WatchAuthenticatedUser />
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/PlanYourTrip' component={PlanYourTrip} />
            <Route path='/Account' component={Account} />
            <Route path='/mission' component={Mission} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/trips' component={Trips} />
          </Switch>
        </Router>
    </LoginProvider>
  );
}



export default App;
