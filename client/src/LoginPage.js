import { useState } from 'react'

function LoginPage( { onLogin, onRegisterClick } ) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function registerClick() {
    onRegisterClick(true)
  }

  function handleLogin(event) {
    event.preventDefault();
    const user = {
      username,
      password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(onLogin)
        } else {
          res.json().then(event => alert(event.error))
        }
      })
  }

  return (
    <div className="flex justify-center items-center bg-cover bg-[url('../public/offroad2.jpeg')]">
    <form className="bg-gray-400 flex flex-col rounded-3xl m-40">
    <h1 className="font-sans font-extrabold p-5 rounded-xl text-6xl">JeeperCreeper</h1>
      <label className="text-center" htmlFor="username">Username:</label>
      <input
        className="m-12 rounded-md border-gray-700 border-2"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="text-center" htmlFor="password">Password:</label>
      <input
        className="m-12 rounded-md border-gray-700 border-2"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-black font-sans font-extrabold p-5 rounded-xl text-3xl m-5 hover:bg-orange-500 text-white" type="submit" onClick={handleLogin}>Login</button>
      <button className="bg-black font-sans font-extrabold p-5 rounded-xl text-3xl m-5 hover:bg-orange-500 text-white" type="button" onClick={registerClick} >Register</button>
    </form>
    </div>
  );
}

export default LoginPage;