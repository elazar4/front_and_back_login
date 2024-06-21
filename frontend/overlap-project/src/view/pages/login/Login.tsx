import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          Don't have an account? <button>Create Account</button>
        </div>
        <button type="submit"> Login</button>
      </div>
    </>
  );
}

export default Login;