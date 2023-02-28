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
      <Form className="d-flex" style={{width:"30%"}}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>

    </div><ul style={{ listStyle: "none" }}>
        {box.map((box) => {
          return (
            <>

              <div className="row justify-content-center">
                <div className="col-md-3 mb-4">
                  <Card className="h-100">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{box.name}</Card.Title>
                      <Card.Text>
                        Quantity: {box.quantity} <br></br>
                        Usage: {box.usage} <br></br>
                        Expiration Date: {box.expiryDate} <br></br>
                      </Card.Text>
                      <Button variant="primary" onClick={seeDetails} >See Details</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </>
          );
        })}
      </ul></>

  );
}

export default ListBoxes;