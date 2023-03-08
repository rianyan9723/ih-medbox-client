import React from 'react';
import '../landing-page.css';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function LandingPage() {
  return (
    <>
      <div className="header">
        <img src="https://images.pexels.com/photos/4210611/pexels-photo-4210611.jpeg" alt="pill pic" />
        <div className="header-text">
          <h4>Welcome to Medvice</h4>
          <p>Your personal app to keep tabs on your tablets!</p>
        </div>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className="landing-page-container">
        <div className="landing-page-image-container">
          <img src="https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg" alt="placeholder" className="landing-page-image" />
        </div>
        <div className="landing-page-text-container">
          <h4 className="landing-page-title">Keep your med inventory in check and get Medvice!</h4>
          <p className="landing-page-text">After inputting your meds' names and quantity you can then access Medvice for both dosage and usage.</p>
        </div>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://images.pexels.com/photos/3873206/pexels-photo-3873206.jpeg" alt="placeholder" className="landing-page-image"
            />
            <Figure.Caption>
              Never lose track of meds you used before with Medvice's pill box system.
            </Figure.Caption>
          </Figure>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://images.pexels.com/photos/7788341/pexels-photo-7788341.jpeg" alt="placeholder" className="landing-page-image"
            />
            <Figure.Caption>
              Medvice uses the OpenFDA API to recommend you ways to dose and store your medicine.
            </Figure.Caption>
          </Figure>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://images.pexels.com/photos/5699519/pexels-photo-5699519.jpeg" alt="placeholder" className="landing-page-image"
            />
            <Figure.Caption>
              By tracking your quantity in stock you can easily see when you need a refill.
            </Figure.Caption>
          </Figure>
        </div>
      </div>

      <br></br>
      <br></br>

    </>


  );
}
export default LandingPage; 
