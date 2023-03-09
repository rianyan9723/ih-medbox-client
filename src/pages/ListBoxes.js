import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteBox, getAllBoxes } from "../api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function ListBoxes() {
  const [box, setBox] = useState([]);
  const navigate = useNavigate();

  const seeDetails = () => {
    let path = `/medication/${box._id}`
    navigate(path);
  }

  async function handleGetAllBoxes() {
    const response = await getAllBoxes();
    setBox(response.data);
  }

  /* const deleteBox = (boxId) =>{
    let path = `/medication/${boxId}`
    navigate(path);
  } */

  const handleDeleteBox = async (boxId) => {
    await deleteBox(boxId)
    await handleGetAllBoxes();

  }

  useEffect(() => {
    handleGetAllBoxes();
  }, []);

  return (
    <><div>

      <br></br>

      <h2>Welcome to MedVice!</h2>

      <br></br>


      <h5>Our 🌿nature-based🌿 item recommendations to keep in stock: </h5>

      <br></br>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://res.cloudinary.com/dbqvnclyu/image/upload/v1678219117/istockphoto-492223016-612x612_lmplze.jpg" />
              <Card.Body>
                <Card.Title>Ginger tea</Card.Title>
                <Card.Text>

                  Function: Alleviates nausea and vomiting.
                  <br></br>
                  <br></br>

                  Daily usage: Drink 2-3 cups per day.
                  <br></br> <br></br>

                  Allergy: Avoid if allergic to ginger.


                </Card.Text>
                {/* <Button variant="primary" onClick={seeDetails}> Details</Button> */}
              </Card.Body>
            </Card>

          </div>
          <div className="col-md-3 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://res.cloudinary.com/dbqvnclyu/image/upload/v1678219116/premium_photo-1668949938451-5df19c0fa4f4_gjgwoi.avif" />
              <Card.Body>
                <Card.Title>Lemon and Honey </Card.Title>
                <Card.Text>
                  Function: Soothes sore throat and cough.<br></br><br></br>

                  Daily usage: Mix 1 tbsp of honey and lemon juice in warm water, drink 2-3 times a day.<br></br><br></br>

                  Allergy: Avoid if allergic to honey or citrus fruits.<br></br><br></br>


                </Card.Text>
                {/* <Button variant="primary" onClick={seeDetails}>Details</Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://res.cloudinary.com/dbqvnclyu/image/upload/v1678219117/istockphoto-673386912-612x612_zdtf49.jpg" />
              <Card.Body>
                <Card.Title>Peppermint Oil</Card.Title>
                <Card.Text>
                  Function: Relieves muscle pain and headaches.<br></br><br></br>

                  Daily usage: Mix a few drops of peppermint oil with carrier oil and massage into affected area.<br></br><br></br>

                  Allergy: Avoid if allergic to peppermint.

                </Card.Text>
                {/* <Button variant="primary" onClick={seeDetails}>Details</Button> */}
              </Card.Body>
            </Card>
          </div>


          <div className="col-md-3 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://res.cloudinary.com/dbqvnclyu/image/upload/v1678219116/istockphoto-878069938-612x612_xtrwb3.jpg" />
              <Card.Body>
                <Card.Title>Aloe vera gel</Card.Title>
                <Card.Text>
                  Function: Relieves sunburn and skin irritation.<br></br><br></br>

                  Daily usage: Apply a small amount to affected area as needed. <br></br><br></br>

                  Allergy: Avoid if allergic to aloe vera.<br></br><br></br>
                </Card.Text>
                {/* <Button variant="primary" onClick={seeDetails}>Details</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>



      <br></br>
      <br></br>

      <h5>Your medication:</h5>

      <br></br>
      <br></br>

    </div>


      <ul style={{ listStyle: "none" }}>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {box.length > 0 ? (box.map((box) => (
            <Card style={{ width: '18rem', margin: '1rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{box.name}</Card.Title>
                <Card.Text>
                  Quantity: {box.quantity} <br />
                  Usage: {box.usage} <br />
                  Expiration Date: {box.expiryDate} <br />
                </Card.Text>
                <Button variant="primary" onClick={() => {
                  handleDeleteBox(box._id)
                }} >Delete</Button>
              </Card.Body>
            </Card>
          ))) : (<>Please add your medication by clicking on "Add new" in the navigation bar.</>)}
        </div>
      </ul>


      <br></br>
      <br></br>

      <Card className="text-center">
        <Card.Body>
          <Card.Title> 💊 Medvice 💊</Card.Title>
          <Card.Text className="text-muted">
            Project developed by Alexandre Cunha and Rian Yan from Ironhack for Module 3
            <br/>
            <Link to="https://github.com/rianyan9723/ih-medbox-client">
              <img src="https://res.cloudinary.com/dvncucx9s/image/upload/v1678369959/github-mark_t7zcav.png" alt="github-icon" style={{ width: "50px" }} />
            </Link>
          </Card.Text>
        </Card.Body>

      </Card>
    </>

  );
}

export default ListBoxes;