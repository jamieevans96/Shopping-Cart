import {useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavigationBar(props) {
  const [ cartCount, setCartCount ] = useState([])
  const [ liveItemsArray, setLiveItemsArray ] = useState([{name: 'Bike 1', price: '£79.99', quantity: 0}, 
  {name: 'Bike 2', price: '£69.99', quantity: 0},
  {name: 'Bike 3', price: '£74.99', quantity: 0},
  {name: 'Bike 4', price: '£65.99', quantity: 0},
  {name: 'Bike 5', price: '£72.99', quantity: 0},
  {name: 'Bike 6', price: '£78.49', quantity: 0}])

  useEffect(() => {
    if (props.count) {
      let newLiveItemsArray = [...liveItemsArray]
      newLiveItemsArray[props.index].quantity = props.count
      setLiveItemsArray(newLiveItemsArray)
      let newCartCount = liveItemsArray.filter((item) => item.quantity !== 0)
      setCartCount(newCartCount.length)
    }
  }, [props])

  return (
    <Navbar bg="primary" variant="dark" sticky='top' >
      <Navbar.Brand href="#home">Bike Shop</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/cart">{cartCount}</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;