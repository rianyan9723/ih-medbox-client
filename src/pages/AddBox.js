import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { createBox, uploadImage } from "../api";
import { toast } from "react-toastify";
import styled from "styled-components";
import axios from "axios";
import { Button } from "react-bootstrap";
import { searchUsage } from "../api";
import Autocomplete from "react-autocomplete";


function AddBox() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [usage, setUsage] = useState("");
  const [expiryDate, setExpirydate] = useState('');
  // const [image, setImage] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function handleSearchUsage(usage) {
      const response = await searchUsage();
      console.log(response)
      setSearchResults(response.data.results[0].dosage_and_administration);
    }
    handleSearchUsage();
  }, []);


  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleUsageChange(event) {
    setUsage(event.target.value);
    setSearchInput(event.target.value);
  }

  function handleExpirydateChange(event) {
    setExpirydate(event.target.value);
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

    navigate("/medication");
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
      <Autocomplete
        getItemValue={(item) => item.label}
        items={[
          { label: 'apple' },
          { label: 'banana' },
          { label: 'pear' }
        ]}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
          </div>
        }
        value={value}
        onChange={(e) => value = e.target.value}
        onSelect={(val) => value = val}
      />
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <h2>Dosage and Administration</h2>
            <p>{result}</p>
          </div>
        ))}
      </div>
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
