import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function CartItem() {
  let imgSrc = require('../imgs/bike1.jpg')

  const [ count, setCount ] = useState(0)

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    if (count>0)
    setCount(count-1)
  }

  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
        <Button variant="dark" onClick={increment}>+</Button>
        <div>{count}</div>
        <Button variant="dark" onClick={decrement}>-</Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;