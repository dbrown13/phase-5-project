import TrailCard from "./TrailCard";

function UserTrails({
  trails,
  favoriteTrail,
  onFavoriteTrail,
  setFavoriteTrail,
  onCompletedTrail
}) {
  // debugger
  const favoriteTrails = favoriteTrail?.map((trail) => {
    // debugger
      if (trail.trail) {
        // debugger
        return (
          <div>
            <TrailCard
              id={trail?.trail?.id}
              key={trail?.trail?.id}
              trail={trail}
              favoriteTrail={favoriteTrail}
              onFavoriteTrail={onFavoriteTrail}
              setFavoriteTrail={setFavoriteTrail}
              name={trail?.trail?.name}
              difficulty={trail?.trail?.difficulty}
              length={trail?.trail?.length}
              favorite={trail?.trail?.favorites}
              onCompletedTrail={onCompletedTrail}
            />
          </div>
        );
      } else {
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
              onCompletedTrail={onCompletedTrail}
            />
          </div>
        );
      }

      
    });

    let newFavoritedTrailCards = favoriteTrails.length > 0 
    ? favoriteTrails 
    : 
    <div className="bg-orange-300 opacity-90 max-w-md rounded-md text-red-800 text-center font-bold font-sans py-3 m-auto">You have no saved trails. Check out the Locations tab to browse off-roading trails!</div>
  
    return (
    <div className="bg-auto h-screen bg-[url('/public/slate.jpeg')]">
      <br></br>
      <div>{newFavoritedTrailCards}</div>
      <br></br>
    </div>
  );
}

export default UserTrails;
