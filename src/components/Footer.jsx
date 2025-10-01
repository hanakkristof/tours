import React from 'react'
import { Navbar } from 'reactstrap'

export const Footer = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{color:"white", fontWeight:"bold",textAlign:"center",width:"100%",maxHeight:"300px", background:"linear-gradient(90deg,rgba(125, 50, 168, 1) 0%, rgba(80, 80, 204, 1) 49%, rgba(90, 126, 224, 1) 100%)"}}>
    <Navbar >
      © 2025 KAM™. All Rights Reserved.
    </Navbar>
    </div>
  )
}

