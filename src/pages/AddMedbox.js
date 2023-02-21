import { useState } from "react";
import { useNavigate } from "react-router";
import { createMedbox, uploadImage } from "../api";
import { toast } from "react-toastify";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color: green;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

function AddMedbox() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [usage, setUsage] = useState("");
  const [expiryDate, setExpirydate] = useState(null);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleUsageChange(event) {
    setUsage(event.target.value);
  }

  function handleExpirydateChange(event) {
    setExpirydate(event.target.value);
  }

  function handleImageSelect(event) {
    setImage(event.target.files[0]);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    console.log({ name, quantity, usage, expiryDate });

    //1. Upload the image through the backend
    const uploadData = new FormData();
    uploadData.append("filename", image);
    const response = await uploadImage(uploadData);
    console.log("response from BE with image Url", response.data);

    //2. Once we get the imageUrl -> create a project
    //with title, description and imageUrl
    await createMedbox({
      name,
      quantity,
      usage,
      expiryDate
    });
    // imageUrl: response.data.fileUrl,
    
    toast.success("Medbox created!");

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        id="quantity"
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
      />
           <label htmlFor="usage">Usage</label>
      <input
        id="usage"
        type="text"
        value={usage}
        onChange={handleUsageChange}
      />
           <label htmlFor="expiry-date">Expiration Date</label>
      <input
        id="expiry-date"
        type="date"
        value={expiryDate}
        onChange={handleExpirydateChange}
      />
      <Button className="button" type="submit">
        Create Medbox
      </Button>
    </form>
  );
}
      // <label htmlFor="image">Image</label>
      // <input id="image" type="file" onChange={handleImageSelect} />

export default AddMedbox;
