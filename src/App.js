import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Background from './imgs/bg-image.jpg'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className='px-0' >
      <Jumbotron className='my-0' > 
        <div className='display-4'>Homepage</div>
      </Jumbotron>
      <Container fluid className='px-0 position-relative' >
        <Card style={{ height: '25%', width: '50%', top: '30%', left: '5%' }} className='position-absolute' >
          <Card.Body>
            <Card.Title style={{ fontSize: '1.8rem' }} className='display-4'>See our entire range of products here</Card.Title>
            <Button href="/products">Products</Button>
          </Card.Body>
        </Card>
        <Image src={Background} className='container-fluid px-0'></Image>
      </Container>
    </Container>
  );
}

export default App;