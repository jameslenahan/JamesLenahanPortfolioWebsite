import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer.js'
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
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand> James Lenahan </Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Footer />
          </Container>
        </Router>


    );
  }
}

export default App;
