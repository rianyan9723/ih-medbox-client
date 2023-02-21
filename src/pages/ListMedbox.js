import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMedbox } from "../api";

function ListMedbox() {
  const [medbox, setMedbox] = useState([]);

  useEffect(() => {
    async function handleGetAllMedbox() {
      const response = await getAllMedbox();
      setMedbox(response.data);
    }
    handleGetAllMedbox();
  }, []);

  return (
    <div>
      <h2>Your Medbox</h2>
      <ul>
        {medbox.map((medbox) => {
          return (
            <li key={medbox._id}>
              <Link to={`/medbox/${medbox._id}`}>
                <h3>{medbox.title}</h3>
              </Link>
              {medbox.imageUrl && (
                <img
                  style={{ width: "20%" }}
                  src={medbox.imageUrl}
                  alt="medbox"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListMedbox;
