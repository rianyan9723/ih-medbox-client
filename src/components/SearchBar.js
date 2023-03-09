import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast } from "react-toastify";


function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [meds, setMeds] = useState([]);
  const [selectedResults, setSelectedResult] = useState({});

  useEffect(() => {
    // Define a function to call your API endpoint and set the results
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.fda.gov/drug/label.json?search=active_ingredient:${searchQuery}&limit=2`);
        setMeds(response.data.results);
      } catch (e) {
        toast.error("No matching ingredient or purpose.");

      }
    };

    if (searchQuery !== "") {
      // Only call the API if there is a search query
      fetchData();
    } else {
      // Clear the results if the search query is empty
      setMeds([]);
    }
  }, [searchQuery]); // Only re-run this effect if searchQuery changes

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call setSearchQuery to trigger the useEffect and call the API
    setSearchQuery(event.target.searchInput.value);
  };

  const handleButtonClick = (medData) => {
    setSelectedResult(medData);
  }

  // const formatTitle = ()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchInput" />
        <Button type="submit" variant="warning" size="sm" style={{ marginLeft: "5px" }}>Find</Button>
      </form>
      <br />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {meds &&
          meds.map(({ active_ingredient, purpose, indications_and_usage, dosage_and_administration, storage_and_handling }) => (
            active_ingredient && purpose &&
            <Card className='meds-list' key={meds} style={{ width: "35%", marginLeft: "5%", marginRight: "5%" }}>
              <Card.Header as="h5">{active_ingredient}</Card.Header>
              <Card.Body>
                <Card.Text>{purpose}</Card.Text>
                <Card.Text>
                  {indications_and_usage}
                </Card.Text>
                <Card.Text>
                  {dosage_and_administration}
                </Card.Text>
                <Card.Text>
                  {storage_and_handling}
                </Card.Text>
                <Button variant="warning" onClick={() => handleButtonClick({ active_ingredient, purpose, indications_and_usage, dosage_and_administration, storage_and_handling })}>Fill form with this medication</Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}
export default SearchBar;