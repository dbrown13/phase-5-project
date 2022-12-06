import BioForm from "./BioForm";
import UserBio from "./UserBio";

function ProfileCard({ user, setUser, handleAddBio, handleClickFormShow, showBioForm, setShowBioForm }) {
  return (
    <div className="font-sans m-auto w-80 p-4 border-4 border-black rounded-md lg:max-w-lg bg-gray-200">
      <div className="text-center space-y-2">
        <img
          className="border-2 border-black rounded-sm m-auto h-36"
          src="/avatar.jpeg"
          alt="avatar"
        />
        <h5>Current User:</h5>
        <h3 className="text-2xl font-sans font-extrabold">
          {user.username.toUpperCase()}
        </h3>
        <UserBio user={user} setUser={setUser}/>
        <div className="space-x-1">
          <button
            onClick={handleClickFormShow}
            className="bg-orange-200 p-1 text-xs rounded-md border-2 border-orange-500 hover:scale-105"
          >
            Add Bio
          </button>
          {showBioForm ? <BioForm setShowBioForm={setShowBioForm} handleAddBio={handleAddBio} user={user} setUser={setUser}/> : null}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
