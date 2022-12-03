import TrailCard from "./TrailCard";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

function Locations({ trails, onFavoriteTrail }) {
//TO DO: learn what this is doing (tyler)
  const { state } = useParams();
  const [difficulty, setDifficulty] = useState("");
//TO DO: learn what this is doing (reese)
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [trailsToDisplay, setTrailsToDisplay] = useState("");
  const [mapTrailCards, setMapTrailCards] = useState("");

  useEffect(() => {
    if(trails === []) { //this is to protect against trails promise being unresolved
        return undefined
    }
    setTrailsToDisplay(() => { //this is where trailsToDisplay is referenced
      let filteredTrails = state //filtering on geographic state (ex. Texas)
        ? trails.filter(
            (trail) =>
              trail.location.state.toLowerCase() === state.toLowerCase()
          )
        : trails;

      let filteredDifficulties = difficulty === "" ? filteredTrails : filteredTrails.filter( //filtering on trail difficulty
        (trail) => trail.difficulty === difficulty
      );

      let searchTrails =
        searchTerm === ""
          ? filteredDifficulties
          : filteredDifficulties.filter((trail) =>
              trail.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

      return searchTrails; //returns to the setter function (setTrailsToDisplay) which then sets the state of trailsToDisplay
    });
  }, [searchTerm, state, difficulty, trails]);

  //   const mapTrailCards =
  //   useEffect(() => {
  //     difficulty
  //       ? filteredDifficulties.map((trail) => (
  //           <TrailCard
  //             key={trail.id}
  //             id={trail.id}
  //             name={trail.name}
  //             difficulty={trail.difficulty}
  //             length={trail.length}
  //             onFavoriteTrail={onFavoriteTrail}
  //             trails={trails}
  //             favorite={trail.favorites}
  //             trailsToDisplay={trailsToDisplay}
  //           />
  //         ))
  //       : filteredTrails.map((trail) => (
  //           <TrailCard
  //             key={trail.id}
  //             id={trail.id}
  //             name={trail.name}
  //             difficulty={trail.difficulty}
  //             length={trail.length}
  //             onFavoriteTrail={onFavoriteTrail}
  //             trails={trails}
  //             favorite={trail.favorites}
  //             trailsToDisplay={trailsToDisplay}
  //           />
  //         ));
  //   }, [difficulty]);

  //   const trailsToDisplay = searchTerm ? trailCards
  //     .filter((trail) => trail.name.toLowerCase())
  //     .includes(searchTerm.toLowerCase()) : trailCards;

  //using separate useEffect for per-task basis (can probably include in one, but more understandable this way)
  useEffect(() => { 
    setMapTrailCards(() => { //separate setter/state -- protecting from infinite render loops
      return trailsToDisplay.length > 0 ? (
        trailsToDisplay.map((trail) => (
          <TrailCard
            key={trail.id}
            id={trail.id}
            name={trail.name}
            difficulty={trail.difficulty}
            length={trail.length}
            onFavoriteTrail={onFavoriteTrail}
            favorite={trail.favorites}
            trails={trails}
          />
        ))
      ) : (
        <div className="bg-orange-300 opacity-90 max-w-md rounded-md text-red-800 text-center font-bold font-sans py-3 m-auto">
          No trails exist for selected options! Try again.
        </div>
      );
    });
  }, [trailsToDisplay]);

  return (
    <div className="font-sans bg-auto bg-[url('/public/slate.jpeg')]">
      <br></br>
      <div className="text-center">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          trailsToDisplay={trailsToDisplay}
        />
      </div>
      <br></br>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex font-sans p-2 rounded-md text-center py-4 bg-gray-400 max-w-md">
          <label
            className="text-md font-bold text-gray-100"
            htmlFor="select-state"
          >
            SELECT A STATE:
          </label>
          <select
            onChange={(e) => navigate(`/locations/${e.target.value}`)}
            className="border-2 border-orange-200 rounded-md"
            id="state-selection"
          >
            <option value="">All</option>
            <option value="Arizona">Arizona</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Nevada">Nevada</option>
            <option value="New Mexico">New Mexico</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>
        <div className="flex font-sans p-2 rounded-md text-center py-4 bg-gray-400 max-w-md">
          <label
            className="text-md font-bold text-gray-100"
            htmlFor="select-difficulty"
          >
            SELECT A DIFFICULTY:
          </label>
          <select
            onChange={(e) => setDifficulty(e.target.value)}
            className="border-2 border-orange-200 rounded-md"
            id="difficulty-selection"
          >
            <option value="">All</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>
      <br></br>
      <div>{mapTrailCards}</div>
      <br></br>
    </div>
  );
}

export default Locations;
