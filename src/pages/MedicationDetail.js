import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getBox, deleteBox } from "../api";
import { Card, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateBox } from "../api";


function BoxDetail() {
  const [box, setBox] = useState();
  const [editing, setEditing] = useState(false);
  const { boxID } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [purpose, setPurpose] = useState("");
  const [usage, setUsage] = useState("");
  const [dosage, setDosage] = useState("");
  const [expiryDate, setExpiryDate] = useState('');
  const [otherInfo, setOtherInfo] = useState('');

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

  function handleDosageChange(event) {
    setDosage(event.target.value);
  }

  function handleExpiryDateChange(event) {
    setExpiryDate(event.target.value);
  }

  function handleOtherInfoChange(event) {
    setOtherInfo(event.target.value);
  }
  const goBack = () => {
    navigate("/medication")
  }

  useEffect(() => {
    async function handleGetBoxDetail() {
      const response = await getBox(boxID);
      setBox(response.data);
      // Set the initial state of the form fields to the corresponding values from the box object
      setName(response.data.name);
      setQuantity(response.data.quantity);
      setPurpose(response.data.purpose);
      setUsage(response.data.usage);
      setDosage(response.data.dosage);
      setExpiryDate(response.data.expiryDate);
      setOtherInfo(response.data.otherInfo);
    }

    handleGetBoxDetail();
  }, [boxID]);

  async function handleDeleteBox(boxID) {
    if (window.confirm('Are you sure you want to delete this medication?')) {
      await deleteBox(boxID);
      navigate("/medication");
      toast.success('Medication deleted!');
    }
  }

  function handleEditBox() {
    setEditing(true);
  }

  async function handleUpdateBox(event) {
    event.preventDefault();
    await updateBox(boxID, {
      name,
      quantity,
      purpose,
      usage,
      dosage,
      expiryDate,
      otherInfo
    });
    setEditing(false);
    // update box state with new data
    const updatedBox = { ...box, name, quantity, purpose, usage, dosage, expiryDate, otherInfo };
    setBox(updatedBox);
    toast.success('Medication updated!');
  }
  return box ? (
    <>
      {editing ? (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "left" }}>
          <Card bg="light" border="dark" key={box} style={{ width: '200rem', margin: "1% 2%", fontFamily: "Open Sans" }}>
            <Card.Body>
              <Card.Title as="h5" style={{ marginBottom: "2%", fontFamily: "Poppins", fontWeight: "bold" }}>Edit Medication Info</Card.Title>
              <Form onSubmit={handleUpdateBox} style={{ textAlign: "left" }}>
                <Card.Text>
                  <Form.Group controlId="name.name">
                    <Form.Label style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>Name / Active Ingredient *</Form.Label>
                    <Form.Control
                      defaultValue={box.name}
                      value={name}
                      onChange={handleNameChange}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="quantity.quantity">
                    <Form.Label style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>Quantity *</Form.Label>
                    <Form.Control
                      defaultValue={box.quantity}
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="purpose.purpose">
                    <Form.Label style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>Purpose *</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={purpose}
                      onChange={handlePurposeChange}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="usage.usage">
                    <Form.Label style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>Usage *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      value={usage}
                      onChange={handleUsageChange}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="dosage.dosage">
                    <Form.Label style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>Dosage *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={dosage}
                      onChange={handleDosageChange}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="expiryDate.expiryDate">
                    <Form.Label style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>Expiry Date *</Form.Label>
                    <Form.Control
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="otherInfo.otherInfo">
                    <Form.Label style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>Other Info</Form.Label>
                    <Form.Control
                      rows={4}
                      value={otherInfo}
                      onChange={handleOtherInfoChange}
                    />
                  </Form.Group>
                  <Form.Text className="text-muted">
                    Fields with * are mandatory
                  </Form.Text>
                  <br />
                  <br />
                  <Button type="submit" size="lg" variant="success" style={{ fontFamily: "Poppins", color: "white" }}>Save</Button>{' '}
                  <Button type="button" size="lg" variant="secondary" onClick={() => { setEditing(false) }} style={{ fontFamily: "Poppins", color: "white" }}>Cancel</Button>
                </Card.Text>
              </Form>
            </Card.Body>
          </Card>
        </div >
      ) : (
        <>
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "left" }}>
              <Card bg="light" border="dark" key={box} style={{ width: '200rem', margin: "1% 2%", fontFamily: "Open Sans" }}>
                <Card.Body>
                  <Card.Header as="h5" style={{ fontFamily: "Poppins", fontWeight: "bold" }}>{box.name}</Card.Header>
                  <Card.Text>
                    <p>{box.purpose}</p>
                    <p>{box.usage}</p>
                    <p>{box.dosage}</p>
                    <p>Quantity: {box.quantity}</p>
                    <p>Expires: {box.expiryDate}</p>
                    <p>{box.otherInfo}</p>
                  </Card.Text>
                  <Button type="button" varient="warning" onClick={() => { handleEditBox(box._id) }} style={{ marginLeft: "1%", fontFamily: "Poppins", color: "white" }}>Edit</Button>
                  <Button type="submit" variant="danger" onClick={() => { handleDeleteBox(box._id) }} style={{ marginLeft: "1%", fontFamily: "Poppins", color: "white" }}>Delete</Button>
                  <Button type="submit" variant="success" onClick={goBack} style={{ marginLeft: "1%", fontFamily: "Poppins", color: "white" }}>Go back to My Area</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <br></br>
        </>
      )
      }
    </>
  ) : (<p>Loading...</p>)
}

export default BoxDetail;
