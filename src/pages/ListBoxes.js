import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteBox, getAllBoxes } from "../api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Recommend from "../components/Recommend";
import { toast } from "react-toastify";


function ListBoxes() {
  const [box, setBox] = useState([]);
  const navigate = useNavigate();

  const seeDetails = async (boxID) => {
    let path = `/medication/${boxID}`
    navigate(path);
  }

  async function handleGetAllBoxes() {
    const response = await getAllBoxes();
    setBox(response.data);
  }

  const handleDeleteBox = async (boxID) => {
    if (window.confirm('Are you sure you want to delete this medication?')) {
      await deleteBox(boxID)
      await handleGetAllBoxes();
      toast.success('Medication deleted!');
    }
  }

  useEffect(() => {
    handleGetAllBoxes();
  }, []);

  return (
    <>
      <div>
        <h2 style={{ fontFamily: "Poppins", margin: "2% 5%" }}>Welcome to your personal med area!</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "left" }}>
          {box.length > 0 ? (
            box.map((box) => (
              <Card bg="light" key={box} style={{ width: '18rem', margin: "1% 1%", fontFamily: "Open Sans" }}>
                <Card.Header as="h5" style={{ fontFamily: "Poppins", fontWeight: "bold", marginLeft: "1%", marginTop: "1%" }}>{box.name}</Card.Header>
                <Card.Text style={{ marginLeft: "5%"}}>
                  <br />
                  {box.purpose}
                  <br />
                  Quantity: {box.quantity}
                  <br />
                  Expires: {box.expiryDate}
                </Card.Text>
                <div style={{ margin: "5%" }}>
                  <Button type="submit" variant="warning" onClick={() => { seeDetails(box._id) }} size="sm" style={{ fontFamily: "Poppins", color: "white", fontWeight: "bold" }}>View Details</Button>
                  <Button type="submit" variant="danger" onClick={() => { handleDeleteBox(box._id) }} size="sm" style={{ marginLeft: "5%", fontFamily: "Poppins", color: "white", fontWeight: "bold" }}>Delete</Button>
                </div>
              </Card>
            ))
          ) : (
            <>Please add your medication by clicking on "Add new" in the navigation bar.</>
          )}
        </div>
      </div>
      <br></br>
      <br></br>
      <Recommend />
    </>


  );
}

export default ListBoxes;