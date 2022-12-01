import TrailCard from "./TrailCard";

function UserTrails({
  trails,
  favoriteTrail,
  onFavoriteTrail,
  setFavoriteTrail,
}) {
  const favoriteTrails = trails
    .filter((trail) => trail.favorites)
    .map((trail) => {
      return (
        <div>
          <TrailCard
            id={trail.id}
            key={trail.id}
            trail={trail}
            favoriteTrail={favoriteTrail}
            onFavoriteTrail={onFavoriteTrail}
            setFavoriteTrail={setFavoriteTrail}
            name={trail.name}
            difficulty={trail.difficulty}
            length={trail.length}
            favorite={trail.favorites}
          />
        </div>
      );
    });

    let newFavoritedTrailCards = favoriteTrails.length > 0 
    ? favoriteTrails 
    : 
    <div className="bg-orange-300 opacity-90 max-w-md rounded-md text-red-800 text-center font-bold font-sans py-3 m-auto">You have no saved trails. Check out the Locations tab to browse off-roading trails!</div>
  
    return (
    <div className="bg-cover h-screen bg-[url('/public/slate.jpeg')]">
      <br></br>
      <div>{newFavoritedTrailCards}</div>
      <br></br>
    </div>
  );
}

export default UserTrails;
