import TrailCard from "./TrailCard";

function CompletedTrails({ fetchTrails, user, trails }) {

  const completedTrails =  trails.map((trail) => {
    const userTrails = trail.user_trails.filter((user_trail) => 
       user_trail.user_id === user?.id &&
       user_trail.completion
    )
    return userTrails.length > 0 ? trail : null
  }).filter((trail) => trail !== null);

  return (
    <div>
      <div>{completedTrails.map((trail) => (
        <TrailCard 
        trail={trail}
        user={user}
        fetchTrails={fetchTrails}
        /> 
      ))}
      </div>
    </div>
  );
}

export default CompletedTrails;
