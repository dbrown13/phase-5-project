import "./App.css";
import { useState, useEffect } from "react";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import UserProfile from "./UserProfile"
import UserTrails from "./UserTrails"
import Locations from "./Locations"
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [needToRegister, setNeedToRegister] = useState(false);
  const [favoriteTrail, setFavoriteTrail] = useState([]);
  const [trails, setTrails] = useState([]);

  const onFavoriteTrail = (favTrails) => {
    const updatedTrails = trails.map((trail) => 
    trail.id === favTrails.id 
    ? favTrails 
    : trail
    );
    setTrails(updatedTrails)
    console.log(updatedTrails)
  }

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });

    fetch("/trails")
    .then((res) => res.json())
    .then(trails => setTrails(trails))
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
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/usertrails" element={<UserTrails trails={trails} onFavoriteTrail={onFavoriteTrail} favoriteTrail={favoriteTrail} setFavoriteTrail={setFavoriteTrail}/>} />
          <Route path="/locations" element={<Locations onFavoriteTrail={onFavoriteTrail} trails={trails} setTrails={setTrails}/>} />
          <Route path="/locations/:state" element={<Locations trails={trails}/>} />
          <Route path="/locations/:difficulty" element={<Locations trails={trails}/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
