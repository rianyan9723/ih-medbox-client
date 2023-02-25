import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllBoxes } from "../api";

function ListBoxes() {
  const [box, setBox] = useState([]);
  const navigate = useNavigate();

  const seeDetails = () => {
    let path = `/box/${box._id}`
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

      <h2>Welcome to Medvice!</h2>

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
    </div>
    </>

  );
}

export default ListBoxes;