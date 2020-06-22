import React from "react";
import { Link } from "react-router-dom";
import { Button, InputGroup, FormControl, Container, Form, Col, Row } from 'react-bootstrap';



import Overview from './Overview'
import Details from './Details'
import Replies from './Replies'
import QuickLinks from './QuickLinks'
import About from './About'

import './taskdetails.css'

class Taskdetails extends React.Component {
    render(){        
        return (
            <div>
                <Row>
                    <Col md="12">
                        <Container className="well-white">
                        <Overview></Overview>
                        </Container>
                    </Col>
                </Row>                
                <Row>
                    <Col md="8">
                        <Container className="well-white">
                            <Details></Details>
                        </Container>
                        <Container className="well-white">
                            <Replies></Replies>
                        </Container>
                    </Col>
                    <Col md="4">
                        <Container className="well-white">
                            <QuickLinks></QuickLinks>
                        </Container>
                        <Container className="well-white">
                            <About></About>
                        </Container>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Taskdetails;