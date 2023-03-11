import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api";
import { toast } from "react-toastify";
import "../signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
}
  from "mdb-react-ui-kit";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await signup({ email, password });
      if (response.data.message) {
        toast.info(response.data.message);
        setPassword("");
        setEmail("");
      } else {
        toast.success("Thanks for creating an account with us ❤");
        navigate("/");
      }
    } catch (e) {
      toast.error(`error ${e}`);
      console.log(e);
    }
  }

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <br/>

              <form onSubmit={handleSubmitForm}>
                <MDBInput
                  label="email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange} />

                <MDBInput
                  label="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange} />
                <MDBBtn className="mb-4" size="lg">Register</MDBBtn>
              </form>

            </MDBCol>

            <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
              <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>


  );
}

export default Signup;
