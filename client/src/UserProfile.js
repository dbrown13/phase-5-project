import ProfileCard from "./ProfileCard";
import CompletedTrails from "./CompletedTrails";
import { useState, useEffect } from 'react'
import TrailCard from './TrailCard'
import UserTrails from "./UserTrails";

function UserProfile({ user, setUser, onCompletedTrail, completedTrail, setCompletedTrail }) {

    // const [completeTrailsToDisplay, setCompleteTrailsToDisplay] = useState([])

    // useEffect(() => { 
    //     setCompleteTrailsToDisplay(() => {
    //       return completedTrail.length > 0 ? (
    //         completedTrail.map((trail) => (
    //           <TrailCard
    //             key={trail.id}
    //             id={trail.id}
    //             name={trail.name}
    //             difficulty={trail.difficulty}
    //             length={trail.length}
    //             onCompletedTrail={onCompletedTrail}
    //             favorite={trail.favorites}
    //             completion={trail.user_trail.completion}
    //           />
    //         ))
    //       ) : (
    //         <div className="bg-orange-300 opacity-90 max-w-md rounded-md text-red-800 text-center font-bold font-sans py-3 m-auto">
    //           No trails have been completed.
    //         </div>
    //       );
    //     });
    //   }, [completeTrailsToDisplay]);

  return (
    <div className="bg-cover h-screen bg-[url('/public/slate.jpeg')] font-sans">
      <br></br>
      <div>
        <ProfileCard user={user} setUser={setUser} />
      </div>
      <br></br>
      <div>
        <CompletedTrails />
      </div>
    </div>
  );
}

export default UserProfile;
