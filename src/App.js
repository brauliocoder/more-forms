import React, { useState } from "react";
import UserForm from './components/UserForm';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
    </div>
  );
}

export default App;
