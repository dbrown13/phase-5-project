import ProfileCard from "./ProfileCard";

function UserProfile({ user, setUser }) {
  return (
    <div className="bg-cover h-screen bg-[url('/public/slate.jpeg')] font-sans">
      <br></br>
      <ProfileCard user={user} setUser={setUser}/>
    </div>
  );
}

export default UserProfile;
