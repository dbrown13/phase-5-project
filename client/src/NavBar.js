import { NavLink } from "react-router-dom"

function NavBar({ onLogout, user }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

      return (
        <div>
            <nav className="flex items-center justify-between p-10 mx-auto bg-black" id="nav-bar">
                <h1 className="text-orange-500 font-sans font-extrabold text-3xl font-fospholipid"> JeeperCreeper ☉||||||☉</h1>
                <div className="float-right space-x-2">
                <NavLink to="/" className="text-gray-600 bg-gray-200  rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold">
                    <a href="#homepage" className="navicons">
                        Home
                    </a>
                </NavLink>
                <NavLink to="/profile" className="text-gray-600 bg-gray-200  rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold">
                    <a href="#user-profile">
                        Profile
                    </a>
                </NavLink>
                <NavLink to="/usertrails" className="text-gray-600 bg-gray-200  rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold">
                    <a href="#user-trails">
                        Saved Trails
                    </a>
                </NavLink>
                <NavLink to="/locations" className="text-gray-600 bg-gray-200  rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold">
                    <a href="#locations">
                        Locations
                    </a>
                </NavLink>
                <NavLink to="/" className="text-orange-300 bg-gray-600 rounded-md p-2 font-sans font-semibold text-xl hover:font-extrabold">
                    <a href="#log-out" onClick={handleLogout}>
                        Log out
                    </a>
                </NavLink>
                </div>
            </nav>
        </div>
      )
}

export default NavBar;