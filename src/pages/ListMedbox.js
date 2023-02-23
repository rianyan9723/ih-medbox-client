import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMedbox } from "../api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ListMedbox() {
  const [medbox, setMedbox] = useState([]);

  useEffect(() => {
    async function handleGetAllMedbox() {
      const response = await getAllMedbox();
      setMedbox(response.data);
    }
    handleGetAllMedbox();
  }, []);

  return (
    <div>
      <h2>Your Medbox</h2>

      <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
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

    
   


      <ul>
        {medbox.map((medbox) => {
          return (
            <li key={medbox._id}>
              <Link to={`/medbox/${medbox._id}`}>
                <h3>{medbox.title}</h3>
              </Link>
              {medbox.imageUrl && (
                <img
                  style={{ width: "20%" }}
                  src={medbox.imageUrl}
                  alt="medbox"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListMedbox;
