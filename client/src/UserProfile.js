import ProfileCard from "./ProfileCard";
import CompletedTrails from "./CompletedTrails";

function UserProfile({ fetchTrails, user, setUser, trails }) {

  return (
    <div className="bg-cover h-screen bg-[url('/public/slate.jpeg')] font-sans">
      <br></br>
      <div>
        <ProfileCard user={user} setUser={setUser} />
      </div>
      <br></br>
      <div>
        <CompletedTrails fetchTrails={fetchTrails} user={user} trails={trails} />
      </div>
    </div>
  );
}

export default UserProfile;
