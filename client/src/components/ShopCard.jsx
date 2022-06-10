import React from 'react';
import { useDispatch } from 'react-redux';
import { CardImg, CardBody, CardText, Card, CardTitle, Button } from 'reactstrap';
import moment from 'moment';
import { deleteShop } from '../redux/actions/shops';


function ShopCardComponents({ shop, setCurrentId }) {
    const dispatch = useDispatch();
  return (
        <div className='mt-2'>
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              {shop.name}
            </CardTitle>
            <CardText>
              <small className="text-muted">
              {moment(shop.openingAt).format("dddd, MMMM Do YYYY")}-{moment(shop.closingAt).format("dddd, MMMM Do YYYY")}
              </small>
            </CardText>
            <CardText>
              {shop.categories}
            </CardText>
          </CardBody>
          <CardImg
            alt={shop.name}
            bottom
            src={shop.selectedFile || 'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            width="100%"
          />
          <CardBody>
            <CardTitle>
              A Shop In &nbsp; {shop.area} 
            </CardTitle>
          </CardBody>
          <CardBody>
            <Button size='sm' color='danger' onClick={()=> dispatch(deleteShop(shop._id))}>Delete</Button>
            <Button size='sm' color='info' className='ms-5' onClick={()=> setCurrentId(shop._id)}>Update</Button>
          </CardBody>
        </Card>
        </div>
    );
}

export default ShopCardComponents;