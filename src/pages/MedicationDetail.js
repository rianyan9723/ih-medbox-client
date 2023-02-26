import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getBox, deleteBox} from "../api";

function BoxDetail() {
  const [box, setBox] = useState();
  const { boxId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetBoxDetail() {
      const response = await getBox(boxId);
      setBox(response.data);
    }

    handleGetBoxDetail();
  }, [boxId]);

  async function handleDeleteBox() {
    await deleteBox(boxId);
    navigate("/");
  }

  return box ? (
    <>
      <h3>{box.title}</h3>
      <p>{box.description}</p>
      <div>
        <button onClick={handleDeleteBox}>Delete</button>
      </div>
      {box.imageUrl && (
        <img width="60%" src={box.imageUrl} alt="medication-box" />
      )}
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default BoxDetail;
