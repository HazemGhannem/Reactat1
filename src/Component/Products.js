import React,{useState} from 'react'
import { Row,Alert } from "react-bootstrap";
import Product  from './Product'
const data = require("../product.json")

const Products = () => {
  
  const [show, setShow] = useState(()=>{
    return false
  })
  setTimeout(()=>{
    setShow(false)
  },3000)
  
  return (
    <>
    
      
      <Alert variant="success"  >
      <Alert.Heading>Hey, Welcome To Our shop</Alert.Heading>
      <p>
        thank you for choosing our store
      </p>
    </Alert>
    
      
    <Row  xs={1} md={2}  className='py-5 px-5'>
    {data.map((p)=>(
   
   
       <Product key={p.name} name={p.name} quantiti={p.quantity} prix={p.price} img={p.img} Like={p.like} setShow={setShow} ></Product>
    
      
    ))}
    </Row>
    {
      show === true &&
      <Alert variant="primary"  >
      
      <p>
        you bought an item
      </p>
    </Alert>
    }
    </>
  )
}

export default Products