import { Card } from "react-bootstrap";

function Recommend() {
    return (
        <div>
            <h5>Our 🌿nature-based🌿 item recommendations to keep in stock: </h5>

            <br></br>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src="https://res.cloudinary.com/dbqvnclyu/image/upload/v1678219117/istockphoto-492223016-612x612_lmplze.jpg" />
                            <Card.Body>
                                <Card.Title as="h5" style={{fontFamily: "Poppins", fontWeight: "bold"}}>Ginger tea</Card.Title>
                                <Card.Text style={{fontFamily: "Open Sans"}}>

                                    Function: Alleviates nausea and vomiting.
                                    <br></br>
                                    <br></br>

                                    Daily usage: Drink 2-3 cups per day.
                                    <br></br> <br></br>

                                    Allergy: Avoid if allergic to ginger.


                                </Card.Text>
                                {/* <Button variant="primary" onClick={seeDetails}> Details</Button> */}
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3 mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src="https://res.cloudinary.com/dvncucx9s/image/upload/v1678392322/premium_photo-1668949938451-5df19c0fa4f4_gjgwoi_ac8hz8.jpg" />
                            <Card.Body>
                                <Card.Title as="h5" style={{fontFamily: "Poppins", fontWeight: "bold"}}>Lemon and Honey </Card.Title>
                                <Card.Text style={{fontFamily: "Open Sans"}}>
                                    Function: Soothes sore throat and cough.<br></br><br></br>

                                    Daily usage: Mix 1 tbsp of honey and lemon juice in warm water, drink 2-3 times a day.<br></br><br></br>

                                    Allergy: Avoid if allergic to honey or citrus fruits.<br></br><br></br>


                                </Card.Text>
                                {/* <Button variant="primary" onClick={seeDetails}>Details</Button> */}
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3 mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src="https://res.cloudinary.com/dbqvnclyu/image/upload/v1678219117/istockphoto-673386912-612x612_zdtf49.jpg" />
                            <Card.Body>
                                <Card.Title as="h5" style={{fontFamily: "Poppins", fontWeight: "bold"}}>Peppermint Oil</Card.Title>
                                <Card.Text style={{fontFamily: "Open Sans"}}>
                                    Function: Relieves muscle pain and headaches.<br></br><br></br>

                                    Daily usage: Mix a few drops of peppermint oil with carrier oil and massage into affected area.<br></br><br></br>

                                    Allergy: Avoid if allergic to peppermint.

                                </Card.Text>
                                {/* <Button variant="primary" onClick={seeDetails}>Details</Button> */}
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-md-3 mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src="https://res.cloudinary.com/dbqvnclyu/image/upload/v1678219116/istockphoto-878069938-612x612_xtrwb3.jpg" />
                            <Card.Body>
                                <Card.Title as="h5" style={{fontFamily: "Poppins", fontWeight: "bold"}}>Aloe Vera gel</Card.Title>
                                <Card.Text style={{fontFamily: "Open Sans"}}>
                                    Function: Relieves sunburn and skin irritation.<br></br><br></br>

                                    Daily usage: Apply a small amount to affected area as needed. <br></br><br></br>

                                    Allergy: Avoid if allergic to aloe vera.<br></br><br></br>
                                </Card.Text>
                                {/* <Button variant="primary" onClick={seeDetails}>Details</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Recommend;