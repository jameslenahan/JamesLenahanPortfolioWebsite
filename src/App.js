
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage';


class App extends React.Component {

  constructor(props) { // setting the state for all of the different components
    super(props);
    this.state = {

    }
  }
  render() {
    return ( // p=0 sets it all the way to the side. Fluid = false pulls the text towards the middle.
        <Router>
            <Route path="/" exact render={() => <HomePage> </HomePage>} />

        </Router>


    );
  }
}

export default App;
