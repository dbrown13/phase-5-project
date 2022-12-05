import "./App.css";
// import 'antd/dist/antd.css'
import { useState, useEffect } from "react";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import UserProfile from "./UserProfile";
import UserTrails from "./UserTrails";
import Locations from "./Locations";
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [needToRegister, setNeedToRegister] = useState(false);
  const [favoriteTrails, setFavoriteTrails] = useState([]);
  const [trails, setTrails] = useState([]);
  const [userTrails, setUserTrails] = useState([]);
  const [completedTrail, setCompletedTrail] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

  const onFavoriteTrail = (favTrails) => {
    const updatedTrails = trails.map((trail) =>
      trail.id === favTrails.id ? favTrails : trail
    );
    setTrails(updatedTrails);
    // debugger;
    setFavoriteTrails([...favoriteTrails, favTrails]);
  };

  const onCompletedTrail = (completeTrail) => {
    const updatedCompletion = trails.map((trail) =>
      trail.id === completeTrail.id ? completeTrail : trail
    );
    console.log(updatedCompletion);
    setTrails(updatedCompletion);
  };

  const onDeleteSavedTrail = (deleteTrail) => {
    const updatedTrails = favoriteTrails.filter(
      (trail) => trail.id !== deleteTrail
    );
    setFavoriteTrails(updatedTrails);
  };

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
          setFavoriteTrails(user.usertrails);
        });
      }
    });

    fetch("/trails")
      .then((res) => res.json())
      .then((trails) => {
        setTrails(trails);
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
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <UserProfile
                user={user}
                setUser={setUser}
                // onCompletedTrail={onCompletedTrail}
                // completedTrail={completedTrail}
                // setCompletedTrail={setCompletedTrail}
              />
            }
          />
          <Route
            path="/usertrails"
            element={
              <UserTrails
                trails={trails}
                user={user}
                onFavoriteTrail={onFavoriteTrail}
                favoriteTrail={favoriteTrails}
                setFavoriteTrail={setFavoriteTrails}
                onCompletedTrail={onCompletedTrail}
              />
            }
          />
          <Route
            path="/usertrails/:id"
            element={
              <UserTrails trails={trails} onCompletedTrail={onCompletedTrail} />
            }
          />
          <Route
            path="/locations"
            element={
              <Locations
                onDeleteSavedTrail={onDeleteSavedTrail}
                user={user}
                onFavoriteTrail={onFavoriteTrail}
                trails={trails}
                setTrails={setTrails}
                onCompletedTrail={onCompletedTrail}
              />
            }
          />
          <Route
            path="/locations/:state"
            element={<Locations trails={trails} />}
          />
          <Route
            path="/locations/:difficulty"
            element={<Locations trails={trails} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
