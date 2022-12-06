import TrailCard from "./TrailCard";

function UserTrails({ trails, user, fetchTrails }) {
  const currentUserTrails = trails
    .map((trail) => {
      const userTrails = trail.user_trails.filter(
        (user_trail) => user_trail.user_id === user?.id
      );
      return userTrails.length > 0 ? trail : null;
    })
    .filter((trail) => trail !== null);

  return (
    <div className="bg-cover h-screen bg-[url('/public/slate.jpeg')]">
      <br></br>
      {currentUserTrails.length > 0 ? (
        <div>
          {currentUserTrails.map((trail) => (
            <TrailCard
              key={trail.id}
              fetchTrails={fetchTrails}
              trail={trail}
              user={user}
            />
          ))}
        </div>
      ) : (
        <div className="bg-orange-300 opacity-90 max-w-md rounded-md text-red-800 text-center font-bold font-sans py-3 m-auto">
          No trails are saved yet. Please navigate to the Locations tab to browse trails!
        </div>
      )}
      <br></br>
    </div>
  );
}

export default UserTrails;
