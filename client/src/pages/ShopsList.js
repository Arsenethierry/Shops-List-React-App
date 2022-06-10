import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ShopCard from '../components/ShopCard';
import ShopDetails from '../components/ShopDetails';


function ShopsList() {
    return (
        <Container className='mt-5'>
            <Row>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
                <Col sm="12" md="3">
                    <ShopCard />
                </Col>
            </Row>
        </Container>
    );
}

export default ShopsList;