import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";
import { toast } from "react-toastify";
import { UserContext } from "../context/user.context";
import '../login.css';




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authenticateUser } = useContext(UserContext);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await login({ email, password });
      debugger
      console.log("response", response);
      localStorage.setItem("authToken", response.data);
      // "authToken" here with response.data

      //Setting the logged user in the context
      authenticateUser();
      toast.success("User logged in");
      navigate("/medbox");
    } catch (e) {
      console.log(e)
      toast.error(`Invalid login`);
    }
  }

  return (


    <>
    
    <br></br>

      <form onSubmit={handleSubmitForm}>
        <h4>Log in</h4>
        <br></br>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            placeholder="Enter password"
            onChange={handlePasswordChange}

          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    
  

    </>
  );
}

export default Login;
