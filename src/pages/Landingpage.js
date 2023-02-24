import React from 'react';
import '../landing-page.css';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function LandingPage() {
  return (
    <>

      <div className="header">
        {/* <img src={headerImage} alt="Header Image" /> */}
        <div className="header-text">
          <h4>Welcome to My Landing Page</h4>
          <p>Some text goes here</p>
          <p> There is supposed to be a picrture here as a background</p>
        </div>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className="landing-page-container">
        <div className="landing-page-image-container">
          <img src="https://via.placeholder.com/500x500.png" alt="placeholder" className="landing-page-image" />
        </div>
        <div className="landing-page-text-container">
          <h4 className="landing-page-title">Title of the content</h4>
          <p className="landing-page-text">Text that goes below the title</p>
        </div>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://via.placeholder.com/171x180.png?text=Placeholder+Image" alt="placeholder" className="landing-page-image"
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://via.placeholder.com/171x180.png?text=Placeholder+Image" alt="placeholder" className="landing-page-image"
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://via.placeholder.com/171x180.png?text=Placeholder+Image" alt="placeholder" className="landing-page-image"
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
          <Figure>
            <Figure.Image
              src="https://via.placeholder.com/171x180.png?text=Placeholder+Image" alt="placeholder" className="landing-page-image"
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </div>
      </div>

      <br></br>
      <br></br>

      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

    </>


  );
}

export default LandingPage;