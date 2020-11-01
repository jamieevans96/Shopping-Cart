import { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Item from './components/Item'
import Container from 'react-bootstrap/Container'

function Products(props) {
  const [ index, setIndex ] = useState(0)
  const [ count, setCount ] = useState(0)

  const itemsArray = [{name: 'Bike 1', price: '£79.99', quantity: 0}, 
  {name: 'Bike 2', price: '£69.99', quantity: 0},
  {name: 'Bike 3', price: '£74.99', quantity: 0},
  {name: 'Bike 4', price: '£65.99', quantity: 0},
  {name: 'Bike 5', price: '£72.99', quantity: 0},
  {name: 'Bike 6', price: '£78.49', quantity: 0}]

  const updateCart = (a, b) => {
    setCount(a)
    setIndex(b)
  }

  const sendProp = (x) => {
    console.log(x)
  }

  const itemsDom = itemsArray.map((item, index) => 
    <Item name={item.name} price={item.price} index={index} updateCart={updateCart} key={index} />
  )

  return (
      <Container>
        <Jumbotron className='my-0'> 
          <div className='display-4'>Products</div>
        </Jumbotron>
        {itemsDom}
      </Container>
  );
}

export default Products;