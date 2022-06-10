import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import ShopCard from '../components/ShopCard';



function ShopsList() {

    const shops = useSelector((state)=>state.shops)
    console.log("shops are:",shops)

    return (
        !shops.length ? <div>loading...</div> : (
            <Container className='mt-5'>
                <Row>
                {shops.map((shop)=>(
                        <Col key={shop._id} sm="12" md="3">
                            <ShopCard shop={shop} />
                        </Col>
                
                    ))}
                    </Row>
            </Container>
        )
    );
}

export default ShopsList;