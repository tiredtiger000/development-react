import {Card,Button,Image, Col, Divider} from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';

export default function Main({foodItem, addToCart}) {
    const { Meta } = Card;
    return (
        <>
        <Col className='gutter-row' xs={10} md={10} xl={7} offset={1}>
            <Card hoverable cover={<Image src={foodItem.image}/>} >
            <Meta title={foodItem.name} description={foodItem.description} />
                <Divider></Divider>
                <p>Price: {foodItem.price}</p>

                <Button onClick={() => {addToCart(foodItem)}} type="primary" icon={<ShoppingCartOutlined />}>
                    Add to Cart
                </Button>

            </Card>
        </Col>
        </>
    )
}