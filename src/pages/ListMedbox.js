import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMedbox } from "../api";
import Button from 'react-bootstrap/Button';

function ListMedbox() {
  const [medbox, setMedbox] = useState([]);
  const navigate = useNavigate();
  
  const seeDetails = () => {
    let path = `/medbox/${medbox._id}`
    navigate(path);
  }

  useEffect(() => {
    async function handleGetAllMedbox() {
      const response = await getAllMedbox();
      setMedbox(response.data);
    }
    handleGetAllMedbox();
  }, []);

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <h2>Your Medbox</h2>
        {medbox.map((medbox) => {
          return (
            <>
              <li>{medbox.name}</li>
              <li>{medbox.quantity}</li>
              <li>{medbox.usage}</li>
              <li>{medbox.expiryDate}</li>
              <br />
              <Button onClick={seeDetails}>See Details </Button>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default ListMedbox;
