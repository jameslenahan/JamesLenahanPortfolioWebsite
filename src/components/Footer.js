import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="footer">
                    <Col className="p-0" md={3} sd={12}>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end">
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;