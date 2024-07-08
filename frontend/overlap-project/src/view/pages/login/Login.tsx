import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Login.css";

/*
const formDataObject = {
  email: '',
  password: '',
};
*/

interface User {
  email: string;
  password: string;
}

function CorrectPassword(password: string): boolean {
  return password.length >= 6
}

function CorrectEmail(email: string): boolean {
  return email.includes("@") && email.includes('.')
}

function Login() {
  //const [formData, setFormData] = useState(formDataObject);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  //const welcome = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateAccount = () => {
    navigate("/createAccount");
  };

  const handleWelcome = async () => {
    if (CorrectEmail(email) && CorrectPassword(password)) {
      handleLogin();
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/getUser', {
        params: { email, password }
      });
      setMessage(response.data);
      navigate('/Welcome')
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data);
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <div>
        <div>
          Email:
          <input
            placeholder="email@example.com"
            name="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          Password:
          <input
            placeholder="Password"
            name="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{errorMessage}</p>
        </div>
        <button type="submit" onClick={handleWelcome}> Login</button>
        {message && <p>{message}</p>}
      </div>
      <div className="create-account">
        Don't have an account? <button onClick={handleCreateAccount}>Create Account</button>
      </div>
    </div>
  );
}

export default Login;