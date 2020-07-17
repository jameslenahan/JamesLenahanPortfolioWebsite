import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
// converting app.js into class component so we can use state
class App extends React.Component {

  constructor(props) { // setting the state for all of the different components
    super(props);
    this.state = {
      title: 'James Lenahan',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Fill this in > Title',
        subTitle: 'subtitle',
        text: 'sub-subtitle'
      },
      about: {
        title: 'Fill this in > Title',
      },
      contact: {
       title: 'Fill this in > Title',
      },
    }
  }
  render() {
    return ( // p=0 sets it all the way to the side. Fluid = false pulls the text towards the middle.
        <Router>
          <Container className="p-0" fluid={false}>
            <p> Hi From React</p>

          </Container>
        </Router>


    );
  }
}

export default App;
