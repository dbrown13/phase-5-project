import "./App.css";
import { useState, useEffect } from "react";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [needToRegister, setNeedToRegister] = useState(false);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  //SETS USER AND HANDLES STATE FOR SHOWING COMPONENTS
  function onLogin(user) {
    setUser(user);
  }

  function onLogout() {
    setUser("");
  }

  function onRegister(value) {
    setNeedToRegister(value);
  }

  function updateUserInfo(user) {
    setUser(user);
    //call fetch to update current user info on the backend
    fetch("/updateUser", {
      method: "PATCH",
      body: JSON.stringify({
        username: user.username,
        name: user.name,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  if (!user) {
    //RENDER BASED ON REGISTER OR LOGIN
    const componentToRender = needToRegister ? (
      <RegisterPage onLogin={onLogin} onCancelClick={onRegister} />
    ) : (
      <LoginPage onLogin={onLogin} onRegisterClick={onRegister} />
    );
    return componentToRender;
  } else {
    return (
      <div className="nav-links">
        <NavBar onLogout={onLogout} user={user} />
      </div>
    );
  }
}

export default App;
