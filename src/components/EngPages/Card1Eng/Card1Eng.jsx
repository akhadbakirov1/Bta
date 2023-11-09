import myPic from '../../../../public/Images/myimg.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card1eng.css';

function Card1() {

 
  return (
   <>
   <div className="card1-main">
      <hr />
      <div className="card1-text-container">
      <div className="one">
            <h1 className='one-h1'>We offer</h1>
        </div>
      </div>
      <hr />

      <div className='card-content1'>
        <Card className="card1" style={{  width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      

      <div className="card-content2">

      <Card className="card2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
   </>
  );
}

export default Card1;