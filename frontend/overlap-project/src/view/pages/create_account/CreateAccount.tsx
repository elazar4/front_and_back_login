import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BooleanArray {
  firstNameValid: boolean;
  LastNameValid: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  confirmPasswordValid: boolean;
}

// Initialize the boolean array with specific values
const booleanArray: BooleanArray = {
  firstNameValid: false,
  LastNameValid: false,
  emailValid: false,
  passwordValid: false,
  confirmPasswordValid: false
};

function CreateAccount () {
  const [firstName, setFirstName] = useState("");
  const [FirstNameErrorMessage, setFirstNameErrorMessage] = useState('');

  const [lastName, setLastName] = useState("");
  const [LastNameErrorMessage, setLastNameErrorMessage] = useState('');

  const [email, setEmail] = useState("");
  const [EmailErrorMessage, setEmailErrorMessage] = useState('');

  const [password, setPassword] = useState("");
  const [PasswordErrorMessage, setPasswordErrorMessage] = useState('');

  const [confirmPassword, setConfirmPassword] = useState("");
  const [ConfirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
};

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    
    if ((/[\u0590-\u05FF]/).test(newFirstName) || newFirstName === '') {
      booleanArray.firstNameValid = newFirstName !== ''
      setFirstNameErrorMessage('');
      
    } else {
      booleanArray.firstNameValid = false
      setFirstNameErrorMessage('Name must be in hebrew');
    }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
    
    if ((/[\u0590-\u05FF]/).test(newLastName) || newLastName === '') {
      booleanArray.LastNameValid = newLastName !== ''
      setLastNameErrorMessage('');
    } else {
      booleanArray.LastNameValid = false
      setLastNameErrorMessage('Name must be in hebrew');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    if ((newEmail.includes("@") && newEmail.includes('.')) || newEmail === '') {
      booleanArray.emailValid = newEmail !== ''
      setEmailErrorMessage('');
    } else {
      booleanArray.emailValid = false
      setEmailErrorMessage('Email must be contain . and @');
    }
  };


  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6 && newPassword !== '') {
      booleanArray.passwordValid = false
      setPasswordErrorMessage('Password must be at least 6 characters long');
    } else {
      booleanArray.passwordValid = newPassword !== ''
      setPasswordErrorMessage('');
    }
  };

  /*const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };*/

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword != password && newConfirmPassword !== '') {
      booleanArray.confirmPasswordValid = false
      setConfirmPasswordErrorMessage('Not mach to password');
    } else {
      booleanArray.confirmPasswordValid = newConfirmPassword !== ''
      setConfirmPasswordErrorMessage('');
    }
  };

  const allTrue = Object.values(booleanArray).every(value => value === true);

  const handleSubmit = (e: React.FormEvent) => {
    if(allTrue){
      navigate("/Welcome")
    }
    else{
      setErrorMessage("One or more of the values you entered are incorrect")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          placeholder="ישראל"
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        {FirstNameErrorMessage && <p style={{ color: 'red' }}>{FirstNameErrorMessage}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          placeholder="ישראלי"
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
        {LastNameErrorMessage && <p style={{ color: 'red' }}>{LastNameErrorMessage}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          placeholder="email@example.com"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {EmailErrorMessage && <p style={{ color: 'red' }}>{EmailErrorMessage}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
        placeholder="password"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {PasswordErrorMessage && <p style={{ color: 'red' }}>{PasswordErrorMessage}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
        placeholder="password"
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {ConfirmPasswordErrorMessage && <p style={{ color: 'red' }}>{ConfirmPasswordErrorMessage}</p>}
      </div>
      <button type="submit">Create Account</button>
      <div>
          Already have an account? <button onClick={handleLogin}>Login</button>
        </div>
    </form>
  );
};

export default CreateAccount;
