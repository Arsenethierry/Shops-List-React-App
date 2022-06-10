import React from 'react';
import { CardImg, CardBody, CardText, Card, CardTitle } from 'reactstrap';


function ShopCard({ shop }) {
  console.log("in card",shop.area)
    return (
        <div className='mt-2'>
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              {shop.name}
            </CardTitle>
            <CardText>
              <small className="text-muted">
                {shop.area}
              </small>
            </CardText>
            <CardText>
              {shop.categories}
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