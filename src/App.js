
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
        title: 'James Lenahan',
        subTitle: 'Full Stack Web Developer',
        text: 'Creating meaningful web applications and websites for all types of organizations.'
      },
      about: {
        title: 'Full Stack Web Developer ready to make a difference.',
      },
      contact: {
       title: 'Please reach out with any inquiries!',
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
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text}/>} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

            <Footer />
          </Container>
        </Router>


    );
  }
}

export default App;
