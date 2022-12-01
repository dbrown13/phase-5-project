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
  return (
    <div className="bg-cover bg-[url('/public/slate.jpeg')]">
      <br></br>
      <div>{favoriteTrails}</div>
      <br></br>
    </div>
  );
}

export default UserTrails;
