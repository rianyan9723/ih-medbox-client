import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getMedbox, deleteMedbox } from "../api";

function MedboxDetail() {
  const [medbox, setMedbox] = useState();
  const { medboxId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetMedboxDetail() {
      const response = await getMedbox(medboxId);
      setMedbox(response.data);
    }

    handleGetMedboxDetail();
  }, [medboxId]);

  async function handleDeleteMedbox() {
    await deleteMedbox(medboxId);
    navigate("/");
  }

  return medbox ? (
    <>
      <h3>{medbox.title}</h3>
      <p>{medbox.description}</p>
      <div>
        <button onClick={handleDeleteMedbox}>Delete</button>
      </div>
      {medbox.imageUrl && (
        <img width="60%" src={medbox.imageUrl} alt="medbox" />
      )}
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default MedboxDetail;
