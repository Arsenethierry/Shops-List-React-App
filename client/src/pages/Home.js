import React from 'react';
import { Button } from 'reactstrap';
import ShopsList from './ShopsList';


function Home() {
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
                    <div className='mt-5'>
                        <Button color='primary' className='m-2'>
                            Add Shop
                        </Button>
                        <Button color='primary'>
                            Add Shop
                        </Button>
                    </div>
        </div>
        <ShopsList />
        </>
    );
}

export default Home;