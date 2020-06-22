import React from 'react'
import Salutation from './Salutaion'
import WelcomeBanner from './WelcomeBanner'
import { Row, Col } from "react-bootstrap";
import './Home.css'

class Home extends React.Component {
    render(){        
        return (
            <div>
                <Row>
                    <Col md="8">
                        <Salutation></Salutation>
                        <WelcomeBanner></WelcomeBanner>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;