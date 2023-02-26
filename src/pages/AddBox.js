import { useState } from "react";
import { useNavigate } from "react-router";
import { createBox, uploadImage } from "../api";
import { toast } from "react-toastify";
import styled from "styled-components";
import axios from "axios";
import { Button } from "react-bootstrap";

function AddBox() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [usage, setUsage] = useState("");
  const [expiryDate, setExpirydate] = useState('');
  const [image, setImage] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();



  // const searchUsage = async (searchTerm) => {
  //   try {
  //     const response = await axios.post("/search", { searchTerm });
  //     setSearchResults(response.data.results[0].dosage_and_administration);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


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

  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }

  // function handleImageSelect(event) {
  //   setImage(event.target.files[0]);
  // }

  async function handleSubmitForm(event) {
    event.preventDefault();
    console.log({ name, quantity, usage, expiryDate });

    //1. Upload the image through the backend
    // const uploadData = new FormData();
    // uploadData.append("filename", image);
    // const response = await uploadImage(uploadData);
    // console.log("response from BE with image Url", response.data);

    //2. Once we get the imageUrl -> create a project
    //with title, description and imageUrl
    await createBox({
      name,
      quantity,
      usage,
      expiryDate
    });
    // imageUrl: response.data.fileUrl,

    toast.success("New box created!");

    navigate("/medvice");
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
      {/* <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <h2>Dosage and Administration</h2>
            <p>{result}</p>
          </div>
        ))}
      </div> */}
      <label htmlFor="expiry-date">Expiration Date</label>
      <input
        id="expiry-date"
        type="date"
        value={expiryDate}
        onChange={handleExpirydateChange}
      />
      <Button className="button" type="submit">
        Create new box
      </Button>
    </form>
  );
}
// <label htmlFor="image">Image</label>
// <input id="image" type="file" onChange={handleImageSelect} />

export default AddBox;
