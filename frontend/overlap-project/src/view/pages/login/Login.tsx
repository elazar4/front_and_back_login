import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function CorrectPassword(password: string): boolean {
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}

function CorrectEmail(email: string): boolean {
  if ("@".includes(email) === false || ".".includes(email) === false){
    return false;
  } else {
    return true;
  }
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const welcome = useNavigate();

  const handleCreateAccount = () => {
      navigate("/createAccount");
  };

  const handleWelcome = () => {
    welcome("/Welcome");
};
  
  return (
    <>
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
        </div>
        <div>
          Don't have an account? <button onClick={handleCreateAccount}>Create Account</button>
        </div>
        <button type="submit" onClick={handleWelcome}> Login</button>
      </div>
    </>
  );
}

export default Login;