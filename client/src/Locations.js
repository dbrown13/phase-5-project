import TrailCard from "./TrailCard";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react'

function Locations({ trails, onFavoriteTrail }) {
  const { state } = useParams();
  const [difficulty, setDifficulty] = useState("")
  const navigate = useNavigate();
  const filteredTrails = state
    ? trails.filter(
        (trail) => trail.location.state.toLowerCase() === state.toLowerCase()
      )
    : trails;
    // set ternary in mapTrailCards
    // is there something set in difficulty?
    const filteredDifficulties = filteredTrails.filter((trail) => trail.difficulty === difficulty)

  const mapTrailCards = difficulty ? filteredDifficulties.map((trail) => (
    <TrailCard
      key={trail.id}
      id={trail.id}
      name={trail.name}
      difficulty={trail.difficulty}
      length={trail.length}
      onFavoriteTrail={onFavoriteTrail}
      trails={trails}
      favorite={trail.favorites}
      />
      )
      ) : (
    filteredTrails.map((trail) => (
    <TrailCard
      key={trail.id}
      id={trail.id}
      name={trail.name}
      difficulty={trail.difficulty}
      length={trail.length}
      onFavoriteTrail={onFavoriteTrail}
      trails={trails}
      favorite={trail.favorites}
    />
  ))
  );
    let newMappedTrailCards = mapTrailCards.length > 0 
    ? mapTrailCards 
    : 
    <div className="bg-orange-300 opacity-90 max-w-md rounded-md text-red-800 text-center font-bold font-sans py-3 m-auto">No trails exist for selected options! Try again.</div>

  return (
    <div className="font-sans bg-auto bg-[url('/public/slate.jpeg')]">
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
      <div >{newMappedTrailCards}</div>
      <br></br>
    </div>
  );
}

export default Locations;
