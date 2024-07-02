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
  const navigate = useNavigate();
  //const welcome = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateAccount = () => {
      navigate("/createAccount");
  };

  const handleWelcome = () => {
    if (CorrectEmail(email) && CorrectPassword(password)){
      handleSubmit();
    }else{
      setErrorMessage("Invalid email or password");
    }
};

/*const handleSubmit = async () => {
  try {    

    console.log('tryind send data to the backend');
    const response = await axios.post("http://localhost:3000/login", {email, password});
    console.log('Response from server:', response.data);
    navigate("/Welcome");
  } catch (error) {
    console.error('Error:', error);
  }
};*/

const handleSubmit = async () => {
  try {    
    console.log('Trying to send data to the backend');
    const response = await axios.post("http://localhost:3000/login", { email, password });
    console.log('Response from server:', response.data);

    if (response.status === 200) {
      console.log('Navigation to /Welcome');
      navigate("/Welcome");
    } else {
      console.log('Unexpected response status:', response.status);
    }
  } catch (error: any) {
    console.error('Error:', error);
    if (error.response && error.response.data) {
      setErrorMessage(error.response.data.message || 'Login failed');
    } else {
      setErrorMessage('Login failed');
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
      </div>
      <div className="create-account">
          Don't have an account? <button onClick={handleCreateAccount}>Create Account</button>
        </div>
    </div>
  );
}

export default Login;