import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBoxes } from "../api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function ListBoxes() {
  const [box, setBox] = useState([]);
  const navigate = useNavigate();

  const seeDetails = () => {
    let path = `/medication/${box._id}`
    navigate(path);
  }

  useEffect(() => {
    async function handleGetAllBoxes() {
      const response = await getAllBoxes();
      setBox(response.data);
    }
    handleGetAllBoxes();
  }, []);

  return (
    <><div>

      <br></br>
      <br></br>

      <h2>Welcome Medvice!</h2>

      <br></br>
      <br></br>

      <h4>Our suggestions to keep in stock:</h4>

      <br></br>
      <br></br>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>


  
      <br></br>
      <br></br>

      <h5>You can check the medicine boxes you created below</h5>

      <br></br> 
      <br></br>


    </div>
    
    <ul style={{ listStyle: "none" }}>

         

  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
  {box.map((box) => (
    <Card style={{ width: '18rem', margin: '1rem' }} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{box.name}</Card.Title>
        <Card.Text>
          Quantity: {box.quantity} <br />
          Usage: {box.usage} <br />
          Expiration Date: {box.expiryDate} <br />
        </Card.Text>
        <Button variant="primary" onClick={seeDetails} >See Details</Button>
      </Card.Body>
    </Card>
  ))}
</div>
          
</ul>

<br></br>
<br></br>

<Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
      </>
  
  );
}

export default ListBoxes;