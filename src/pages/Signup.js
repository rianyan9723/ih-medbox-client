import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api";
import { toast } from "react-toastify";
import "../signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
}
  from 'mdb-react-ui-kit';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePaswordChange(event) {
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
        toast.success("User created");
        navigate("/");
      }
    } catch (e) {
      toast.error(`error ${e}`);
    }
  }

  return (
    <><>

    </>

      <MDBContainer fluid className='p-4'>

        <MDBRow>

          <MDBCol md='6'>

            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>

                <form onSubmit={handleSubmitForm}>

                  <MDBInput
                    wrapperClass='mb-4'
                    label='Email'
                    id='email'
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                  />

                  <MDBInput
                    wrapperClass='mb-4'
                    label='Password'
                    id='password'
                    value={password}
                    type="password"
                    onChange={handlePaswordChange}
                  />



                  <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
                </form>



              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </>


  );
}

export default Signup;
