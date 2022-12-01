function ProfileCard() {
  return (
    <div className="bg-cover h-screen bg-[url('/public/slate.jpeg')] font-sans">
      <div className="font-sans m-auto w-80 p-4 border-4 border-black rounded-md lg:max-w-lg bg-gray-200">
        <div className="text-center space-y-2">
          <img className="m-auto h-36" src="/avatar.jpeg" alt="avatar" />
          <h3 className="text-2xl font-semibold">User Name Here</h3>
          <p className="text-gray-600">
            I want to be able to delete or add an avatar image. I want to be
            able to delete or add a note.
          </p>
          <div className="space-x-1">
            <button className="bg-orange-200 p-1 text-xs rounded-md border-2 border-orange-500 hover:scale-105">
              Change Avatar
            </button>
            <button className="bg-orange-200 p-1 text-xs rounded-md border-2 border-orange-500 hover:scale-105">
              Add Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
