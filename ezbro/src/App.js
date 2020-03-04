import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import  Exercises  from './pages/Exercises';
import { Nutrition } from './pages/Nutrition';
import { Login } from './pages/Login';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { JumbotronBottom } from './components/JumbotronBottom';
// import ExerciseList  from './components/ExerciseList';
import styled from 'styled-components';
// import { Image } from 'react-bootstrap';
import girlImage from './assets/girlImage.jpeg';
import './App.css';



const Styles = styled.div`
.jumbotron{
    background: url(${girlImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
}

.overlay{
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

function App() {
  return (
    <React.Fragment>
        <NavigationBar />
          <Styles>
          </Styles>
          <Jumbotron />
          <Layout style={{height: "100vh"}}>
              <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/workouts" component={Workouts} />
                  <Route exact path="/exercises" component={Exercises} />
                  <Route exact path="/nutrition" component={Nutrition} />
                  <Route exact path="/login" component={Login} />
                  <Route component={NoMatch} />

                </Switch>
              </Router>


          </Layout>
          <JumbotronBottom className="position-fixed"
        style={{width: "100%"}} />
  

    </React.Fragment>
  );
}

export default App;
