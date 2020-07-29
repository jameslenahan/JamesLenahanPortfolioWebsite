import React from 'react';
import Content from '../components/Content';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../App.css'

function AboutPage(props) {

    return(
        <div>
            <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                <Container fluid={true}>
                    <Row className="justify-content-center py-5">
                        <Col md={5} sm={12}>
                            { props.title && <h1 className="display-3 font-weight-bolder">{props.title}</h1> }
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <p> <a className="links" href="https://www.linkedin.com/in/james-lenahan-9ba40682/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>

            <p> <a className="links" href="https://github.com/jameslenahan?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a></p>

        </div>
    );

}

export default AboutPage;