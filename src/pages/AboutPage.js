import React from 'react';
import Content from '../components/Content';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../App.css'
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function AboutPage(props) {

    return(
        <div>
            <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                <Container fluid={true}>
                    <div>
                        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
                        <Carousel />
                    </div>
                </Container>
            </Jumbotron>


        </div>
    );

}

export default AboutPage;

//                             <p> <a className="display-4" href="https://www.linkedin.com/in/james-lenahan-9ba40682/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
//
//                             <p> <a className="display-4" href="https://github.com/jameslenahan?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a></p>