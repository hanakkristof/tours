import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Mycard = ({ id, name, image, price, info }) => {
    return (
        <div>
                <Card className='d-flex flex-direction-column align-items-center justify-content-center' style={{maxWidth:"300px",height:"400px"}}>
                    
                    <CardImg
                        style={{overflow:"hidden",aspectRatio:"1/1", objectFit:"cover",padding:"3px",height:"300px", borderTopLeftRadius:"15px", borderTopRightRadius:"15px"}}
                        src={image}
                        top
                    />
                    
                    <CardBody style={{height:"200px"}}>
                        <CardTitle style={{fontWeight:"bold"}} tag="h5">
                            {name}
                        </CardTitle>
                        <Button style={{textAlign:"center", backgroundColor:"blue", border:"black 1px solid"}}>
                            Read More <FaArrowRight/>
                        </Button>
                    </CardBody>
                </Card>
        </div>
    )
}


