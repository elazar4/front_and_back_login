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
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}

function CorrectEmail(email: string): boolean {
  if (email.includes("@") && email.includes('.')){
    return true;
  } else {
    return false;
  }
}

function Login() {
  //const [formData, setFormData] = useState(formDataObject);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const welcome = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateAccount = () => {
      navigate("/createAccount");
  };

  const handleWelcome = () => {
    if (CorrectEmail(email) && CorrectPassword(password)){
      welcome("/Welcome");
    }else{
      setErrorMessage("Invalid email or password");
    }
};

const handleSubmit = async () => {
  try {
    const response = await axios.post("http://localhost:3000/login", {email, password});
    console.log('Response from server:', response.data);
    handleWelcome()
  } catch (error) {
    console.error('Error:', error);
  }
};
  
  return (
    <div>
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
        <div>
          Don't have an account? <button onClick={handleCreateAccount}>Create Account</button>
        </div>
        <button type="submit" onClick={handleSubmit}> Login</button>
      </div>
      
    </div>
  );
}

export default Login;