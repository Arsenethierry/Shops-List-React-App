import React from 'react';
import { Button } from 'reactstrap';
import { Input } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import ShopCardComponent from '../components/ShopCard';
import './../components/spinner.css';



function Home() {

    const shops = useSelector((state)=>state.shops)

    return (
        <>
        <div class="container-fluid text-sm-center p-5 bg-info">
                    <div className='row row-header m-2'>
                        <h1 class="display-2">Arsene Shop Lists App</h1>
                        <p>
                        We take inspiration from te World's best cuisines, and create a unique 
                                    fusion experience. Our lipsmacking creations 
                                    will ti ckle your culinary senses!
                        </p>
                        
                    </div>
                    <div className='container d-flex justify-content-center mt-5'>
                    <Input type="search" class="form-control rounded w-50 p-3" placeholder="Search shops by name, category or area" />
                    </div>
        </div>
        <div>
        {!shops.length ? <div className='spinner center'></div> : (
            <Container className='mt-5'>
                <Row>
                {shops.map((shop)=>(
                        <Col key={shop._id} sm="12" md="3">
                            <ShopCardComponent shop={shop} />
                        </Col>
                
                    ))}
                    </Row>
            </Container>
        )}
        </div>
        </>
    );
}

export default Home;