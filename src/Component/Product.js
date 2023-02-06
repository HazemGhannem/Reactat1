import React from 'react'
import { Col,Card, Button} from "react-bootstrap";



const Product = ({name,quantiti,prix,img,Like, setShow}) => {
 
  const handleevent = ()=>{
   setShow(true)
  }
 
  return (
    <>
   
    <Col md={4} >
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={'assets\\image\\'+img} />
    
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      <h3>{quantiti} Piece</h3> 
      </Card.Text>
      <h3 >{prix} DT</h3>
      
      <h3>Like: {Like}</h3>
      <div  style={{display: 'flex', justifyContent: 'space-between'}}>
      <Button variant='primary'>Like</Button>
      {Like !== 0 && <Button onClick={handleevent} variant='info'  >Buy</Button>
      }

      
      </div>
      
    </Card.Body>
  </Card>
  </Col>

  </>

  )
}

export default Product