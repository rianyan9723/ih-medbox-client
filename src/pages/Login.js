import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";
import { toast } from "react-toastify";
import { UserContext } from "../context/user.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authenticateUser } = useContext(UserContext);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePaswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await login({ email, password });
      console.log("response", response);
      localStorage.setItem("authToken", response.data);
      //Setting the logged user in the context
      authenticateUser();
      toast.success("User logged in");
      navigate("/medbox");
    } catch (e) {
      toast.error(`Invalid login`);
    }
  }

  return (
  
    
      <><h3>Login</h3><form onSubmit={handleSubmitForm}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={handleEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        value={password}
        type="password"
        onChange={handlePaswordChange} />

      <button type="submit">Login</button>
    </form><p>Don't have an account?</p>
    
    <form style={{width: '50%', margin: 'auto'}}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </>
  );
}

export default Login;
