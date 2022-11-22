import { useState } from "react";

function RegisterPage({ onLogin, onCancelClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  function handleRegister(event) {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    if (password === passwordConfirmation) {
      fetch("/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => {
        if (res.ok) {
          res.json().then(onLogin);
        } else {
          res.json().then((event) => alert(event.error));
        }
      });
    } else {
      setUsername("");
      setPassword("");
      setPasswordConfirmation("");
      alert("That password does not exist.");
    }
  }

  function cancelClick() {
    onCancelClick(false);
  }

  return (
    <div className="flex justify-center items-center bg-cover bg-[url('../public/offroad2.jpeg')]">
      <form
        className="bg-gray-400 flex flex-col rounded-lg m-10"
        onSubmit={handleRegister}
        id="register-form"
      >
        <p className="font-sans font-extrabold p-2 rounded-xl text-center text-2xl">
          Sign-up Here
        </p>
        <label className="text-center" htmlFor="username">
          Username:
        </label>
        <input
          className="rounded-md border-gray-700 border-2"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <label className="text-center" htmlFor="password">
          Password:
        </label>
        <input
          className="rounded-md border-gray-700 border-2"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <label className="text-center" htmlFor="password_confirmation">
          Confirm Password:
        </label>
        <input
          className="rounded-md border-gray-700 border-2"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button
          className="bg-black font-sans font-extrabold p-5 rounded-xl text-xl m-5 hover:bg-orange-500 text-white"
          type="submit"
        >
          Register
        </button>
        <button
          className="bg-black font-sans font-extrabold p-5 rounded-xl text-xl m-5 hover:bg-orange-500 text-white"
          type="button"
          onClick={cancelClick}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
