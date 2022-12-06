import TrailCard from "./TrailCard";

function UserTrails({
  trails,
  user,
  fetchTrails,
}) {

  const currentUserTrails = trails.map((trail) => {
    const userTrails = trail.user_trails.filter((user_trail) =>
      user_trail.user_id === user?.id
    )
    return userTrails.length > 0 ? trail : null
  }).filter((trail) => trail !== null);

  return (
    <div className="bg-auto h-screen bg-[url('/public/slate.jpeg')]">
      <br></br>
      <div>{currentUserTrails.map((trail) => (
        <TrailCard
          key={trail.id}
          fetchTrails={fetchTrails}
          trail={trail}
          user={user}
        />
      ))}
      </div>
      <br></br>
    </div>
  );
}

export default UserTrails;
