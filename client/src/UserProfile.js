import ProfileCard from "./ProfileCard";
import CompletedTrails from "./CompletedTrails";

function UserProfile({ fetchTrails, user, setUser, trails, handleAddBio, handleClickFormShow, showBioForm, setShowBioForm }) {

  return (
    <div className="bg-auto h-screen bg-[url('/public/slate.jpeg')] font-sans">
      <br></br>
      <div>
        <ProfileCard user={user} setUser={setUser} handleAddBio={handleAddBio} handleClickFormShow={handleClickFormShow} showBioForm={showBioForm} setShowBioForm={setShowBioForm}/>
      </div>
      <br></br>
      <div>
      <h1 className="text-center text-white text-xl bg-gray-500 max-w-sm rounded-md m-auto"> List of Your Completed Trails: </h1>
        <CompletedTrails fetchTrails={fetchTrails} user={user} trails={trails} />
      </div>
    </div>
  );
}

export default UserProfile;
