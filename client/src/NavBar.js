import { NavLink } from "react-router-dom";

function NavBar({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div>
      <nav
        className="flex items-center justify-between p-10 mx-auto bg-black"
        id="nav-bar"
      >
        <h1 className="text-orange-500 font-sans font-extrabold text-3xl font-fospholipid">
          {" "}
          JeeperCreeper ☉||||||☉
        </h1>
        <div className="float-right space-x-2">
          <NavLink
            to="/"
            className="text-gray-600 bg-gray-200  rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold"
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className="text-gray-600 bg-gray-200  rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold"
          >
            Profile
          </NavLink>
          <NavLink
            to="/usertrails"
            className="text-gray-600 bg-gray-200  rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold"
          >
            Saved Trails
          </NavLink>
          <NavLink
            to="/locations"
            className="text-gray-600 bg-gray-200  rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold"
          >
            Locations
          </NavLink>
          <NavLink
            to="/"
            className="text-orange-300 bg-gray-600 rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold"
            onClick={handleLogout}
          >
            Log out
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
