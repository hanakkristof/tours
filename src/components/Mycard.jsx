import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mymodal } from './Mymodal';

export const Mycard = ({id, name, image, price, info }) => {
    const [modal, setModal] = useState(false);
    const [selImg,setSelImg] = useState(null);
    const [selPrice,setSelPrice] = useState(null);
    const [selInfo, setSelInfo] = useState(null);
    const toggle = () =>{
            setSelImg(image)
            setSelPrice(price)
            setSelInfo(info)
            setModal(!modal)}
    return (
        <div>
                <Card className='d-flex flex-column align-items-center justify-content-center' style={{width:"300px",height:"420px"}}>
                    
                    <CardImg
                        style={{overflow:"hidden",aspectRatio:"1/1", objectFit:"cover",height:"300px", borderTopLeftRadius:"5px", borderTopRightRadius:"5px"}}
                        src={image}
                        top
                    />
                    <CardBody style={{height:"100px"}} >
                        <div style={{height:"50px"}}>
                        <CardTitle style={{fontWeight:"bold"}} tag="h5">
                            {name}
                        </CardTitle>
                        </div>
                        <div style={{height:"50px"}}>
                        <Button onClick={()=>toggle(image,price,info)} style={{ marginTop:"5px",textAlign:"center", backgroundColor:"blue", border:"black 1px solid"}}>
                            Read More <FaArrowRight/>
                        </Button>
                        </div>
                    </CardBody>
                    
        {modal && <Mymodal modal={modal} setModal={setModal} selImg = {selImg} selPrice = {selPrice} selInfo = {selInfo} />}
                </Card>
               
        </div>
    )
}


