import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import {Home} from './components/Home'
import {Dashboard} from './components/Dashboard'
import {Workouts} from './components/Workouts'
import {Exercises} from './components/Exercises'
import {Nutrition} from './components/Nutrition'
import {Login} from './components/Login'
import {NoMatch} from './components/NoMatch'

function App() {
  return (
   <React.Fragment>
     <Router>
       <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/dashboard" component={Dashboard} /> 
        <Route exact path="/workouts" component={Workouts} /> 
        <Route exact path="/exercises" component={Exercises} /> 
        <Route exact path="/nutrition" component={Nutrition} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />

       </Switch>
     </Router>


   </React.Fragment>
  );
}

export default App;
