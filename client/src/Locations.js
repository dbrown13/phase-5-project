import TrailCard from "./TrailCard";
import { useParams, useNavigate } from "react-router-dom";

function Locations({ trails, onFavoriteTrail }) {
  const { state } = useParams();
  const navigate = useNavigate();
  const filteredTrails = state
    ? trails.filter(
        (trail) => trail.location.state.toLowerCase() === state.toLowerCase()
      )
    : trails;
  const mapTrailCards = filteredTrails.map((trail) => (
    <TrailCard
      key={trail.id}
      name={trail.name}
      difficulty={trail.difficulty}
      length={trail.length}
      onFavoriteTrail={onFavoriteTrail}
      trails={trails}
    />
  ));

  return (
    <div className="font-sans bg-auto bg-[url('/public/slate.jpeg')]">
      <br></br>
      <div className="inline-flex space-x-2">
        <div className="flex-auto font-sans p-2 rounded-md text-center py-4 bg-gray-400 max-w-md">
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
        <div className="flex flex-auto font-sans p-2 rounded-md text-center py-4 bg-gray-400 max-w-md">
          <label
            className="text-md font-bold text-gray-100"
            htmlFor="select-difficulty"
          >
            SELECT A DIFFICULTY:
          </label>
          <select
            onChange={(e) => console.log(e.target.value)}
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
      <div>{mapTrailCards}</div>
      <br></br>
    </div>
  );
}

export default Locations;
