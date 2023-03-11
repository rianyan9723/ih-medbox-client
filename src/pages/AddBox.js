import { useState } from "react";
import { useNavigate } from "react-router";
import { createBox } from "../api";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import SearchBar from "../components/SearchBar";


function AddBox() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [purpose, setPurpose] = useState("");
  const [usage, setUsage] = useState("");
  const [dosage, setDosage] = useState("");
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

  function handleDosageChange(event) {
    setDosage(event.target.value);
  }

  function handleExpiryDateChange(event) {
    setExpiryDate(event.target.value);
  }

  function handleOtherInfoChange(event) {
    setOtherInfo(event.target.value);
  }
  async function handleSubmitForm(event) {
    event.preventDefault();

    // Check if all required keys have values
    if (name && quantity && purpose && usage && dosage && expiryDate) {
      await createBox({
        name,
        quantity,
        purpose,
        usage,
        dosage,
        expiryDate,
        otherInfo
      });
      toast.success("New box created!");
      navigate("/medication");
    } else {
      // Handle error when required keys are missing
      toast.error("Please fill in all required fields.");
    }
  }


  function getMedData(active_ingredient, purpose, indications_and_usage, dosage_and_administration, storage_and_handling) {
    setName(active_ingredient.toString())
    setPurpose(purpose.toString());
    setUsage(indications_and_usage.toString());
    setDosage(dosage_and_administration.toString());
    setOtherInfo(storage_and_handling.toString());
  }
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "2% 5%" }}>
        <div style={{ width: "70%" }}>
          <br />
          <SearchBar handleGetMedData={getMedData} />
        </div>
        <div style={{ fontFamily: "Poppins", width: "25%", marginBottom: "5%" }}>
          <br />
          <p>Register your medication</p>
          <Form onSubmit={handleSubmitForm} style={{ textAlign: "left" }}>
            <Form.Group controlId="name.name">
              <Form.Label style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>Name / Active Ingredient *</Form.Label>
              <Form.Control
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="quantity.quantity">
              <Form.Label style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>Quantity *</Form.Label>
              <Form.Control
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
