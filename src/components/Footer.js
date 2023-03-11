import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <Card className="text-center">
        <Card.Body>
          <Card.Title style={{fontFamily:"Poppins"}}> 💊 MedVice 💊</Card.Title>
          <Card.Text className="text-muted" style={{fontFamily:"Open Sans"}}>
            Project created and developed by Alexandre Cunha and Rian Yan, Ironhack Portugal, WebDev PT Module 3 
            <Link to="https://github.com/rianyan9723/ih-medbox-client" style={{marginLeft:"1%"}}>
              <img src="https://res.cloudinary.com/dvncucx9s/image/upload/v1678369959/github-mark_t7zcav.png" alt="github-icon" style={{ width: "50px" }} />
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Footer;