import React from 'react';
import { CardImg, CardBody, CardText, Card, CardTitle } from 'reactstrap';


function ShopCard(props) {
    return (
        <div className='mt-2'>
<Card>
<CardBody>
  <CardTitle tag="h5">
    Card Title
  </CardTitle>
  <CardText>
    <small className="text-muted">
      Last updated 3 mins ago
    </small>
  </CardText>
  <CardText>
    This is a wider card
  </CardText>
</CardBody>
<CardImg
  alt="Card image cap"
  bottom
  src="https://picsum.photos/318/180"
  width="100%"
/>
</Card>
        </div>
    );
}

export default ShopCard;