import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { createBox } from "../api";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import axios from "axios";
import AsyncSelect from 'react-select'

function AddBox() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [usage, setUsage] = useState([]);
  const [expiryDate, setExpirydate] = useState('');
  const [selectedUsage, setSelectedUsage] = useState("")
  // const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const url =
      `https://api.fda.gov/drug/label.json?search=indications_and_usage:parac&limit=10`;
    axios.get(url).then((response) => {
      const options = response.data.results;//[0].dosage_and_administration[0]);
      return options;
    })
  }, []);


  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleUsageChange(selectedOption) {
    console.log("handleUsageChange", selectedOption);
  }
  // const loadOptions = (searchValue, callback) => {
  //   setTimeout(() => {
  //     const filteredOptions = options.filter(option => option.dosage_and_admininstration[0].toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //   })
  // }

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
      {/* <AsyncSelect loadOptions={loadOptions} onChange={handleUsageChange} />; */}
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
