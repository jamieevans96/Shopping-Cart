import Jumbotron from 'react-bootstrap/Jumbotron'
import CartItem from './components/CartItem'
import Container from 'react-bootstrap/Container'

function Cart() {
  return (
    <Container>
      <Jumbotron className='my-0'> 
        <div className='display-4'>Cart</div>
      </Jumbotron>
      <CartItem />
      <CartItem />
      <CartItem />
    </Container>
  );
}

export default Cart;