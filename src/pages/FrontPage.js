import '../front-page.css';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, React } from 'react';
import { useNavigate } from 'react-router-dom';

function FrontPage() {
  const navigate = useNavigate();

  const joinNow = () => {
    navigate("/signup");
  }

  return (
    <>
      <div className="header">
        <img src="https://images.pexels.com/photos/4210611/pexels-photo-4210611.jpeg" alt="pill pic" />
        <div className="header-text">
          <h4>Welcome to MedVice</h4>
          <p>Your medication, simplified</p>
          <Button variant="danger" onClick={joinNow}>Sign Up for free</Button>
        </div>
      </div>

      <br />

      <div className="front-page-container" style={{ display: 'flex' }}>
        <div className="front-page-text-container" style={{ justifyContent: 'center' }}>
          <h4 className="front-page-title">Keep your meds in check with MedVice!</h4>
          <p className="front-page-text">With MedViceAfter inputting your meds' names and quantity you can then access Medvice for both dosage and usage.</p>
        </div>
      </div>

      <br></br>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://images.pexels.com/photos/5699519/pexels-photo-5699519.jpeg" alt="placeholder" className="front-page-image"
            />
            <Figure.Caption style={{  mily: 'Poppins' }}>
              Never lose track of meds and how many you got left ever again 💊 ✅
            </Figure.Caption>
          </Figure>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://images.pexels.com/photos/7788341/pexels-photo-7788341.jpeg" alt="placeholder" className="front-page-image"
            />
            <Figure.Caption style={{ fontFamily: 'Poppins' }}>
              MedVice uses OpenFDA API to recommend you ways to store, dose and identify meds 👀 🔎
            </Figure.Caption>
          </Figure>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg" alt="placeholder" className="front-page-image"
            />
            <Figure.Caption style={{ fontFamily: 'Poppins' }}>
              Stop using leaflets and writing down indications with MedVice now! ⛔ 🖊️ 💊

            </Figure.Caption>
          </Figure>
        </div>
      </div>

      <br></br>
      <br></br>
    </>


  );
}
export default FrontPage; 
