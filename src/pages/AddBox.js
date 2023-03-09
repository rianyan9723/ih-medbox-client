import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { createBox } from "../api";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import SearchBar from "../components/SearchBar";


function AddBox() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [purpose, setPurpose] = useState("");
  const [usage, setUsage] = useState("");
  const [expiryDate, setExpiryDate] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handlePurposeChange(event) {
    setPurpose(event.target.value);
  }

  function handleUsageChange(event) {
    setUsage(event.target.value);
  }

  function handleExpiryDateChange(event) {
    setExpiryDate(event.target.value);
  }

  function handleOtherInfoChange(event) {
    setOtherInfo(event.target.value);
  }
  async function handleSubmitForm(event) {
    event.preventDefault();
    await createBox({
      name,
      quantity,
      purpose,
      usage,
      expiryDate,
      otherInfo
    });

    toast.success("New box created!");
    navigate("/medication");
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: "70%" }}>
          <br />
          <h6 style={{ fontFamily: "Poppins" }}>Find medication by active ingredient or purpose:</h6>
          <p style={{ fontFamily: "Open Sans", fontSize: "13px" }}>Example: Paracetamol or Pain Reliever</p>
          <SearchBar />
        </div>
        <div style={{ fontFamily: "Poppins", width: "25%", marginRight: "5%" }}>
          <br />
          <h6>Or create your own!</h6>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group controlId="name">
              <Form.Label>Active Ingredient / Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </Form.Group>
            <Form.Group controlId="purpose">
              <Form.Label>Purpose</Form.Label>
              <Form.Control
                type="purpose"
                value={purpose}
                onChange={handlePurposeChange}
              />
            </Form.Group>
            <Form.Group controlId="usage">
              <Form.Label>Usage</Form.Label>
              <Form.Control
                type="usage"
                value={usage}
                onChange={handleUsageChange}
              />
            </Form.Group>
            <Form.Group controlId="expiryDate">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
            </Form.Group>
            <Form.Group controlId="otherInfo">
              <Form.Label>Other Info</Form.Label>
              <Form.Control
                type="otherInfo"
                value={otherInfo}
                onChange={handleOtherInfoChange}
              />
            </Form.Group>
            <br />
            <Button className="button" type="submit" variant="success">
              Add new medication
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}


export default AddBox;
