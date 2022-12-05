import { useState } from "react";

function TrailCard({
  id,
  name,
  length,
  difficulty,
  onFavoriteTrail,
  favorite,
  onCompletedTrail,
  completion,
  user,
  onDeleteSavedTrail,
  trail
}) {
    let trailData = trail

    if (trail.trail) {
        trailData = trail.trail
    } else { 
        trailData = trail
    }
    // debugger
//   const [star, setStar] = useState(trail.favorites ? trail.favorites : trail?.user_trails?.some((userTrail) => userTrail.user_id === user.id));
  const [star, setStar] = useState(trailData?.user_trails?.some((userTrail) => userTrail.user_id === user?.id));

  const handleFavoriteClick = () => {
    setStar((star) => !star);

    if (!star) {
      fetch(`/user_trails`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          completion: false,
          user_id: user.id,
          trail_id: id,
          favorites: true,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          onFavoriteTrail(data);
        });
    } else {

        // if (!star) {
        //     fetch(`/user_trails/${id}`, {
        //       method: "PATCH",
        //       headers: {
        //         "Content-type": "application/json",
        //       },
        //       body: JSON.stringify({
        //         completion: !completion,
        //         user_id: user.id,
        //         trail_id: id,
        //         favorites: !favorite,
        //       }),
        //     })
        //       .then((r) => r.json())
        //       .then((data) => {
        //         onFavoriteTrail(data);
        //       });
        //   } else {
        
       const deleteId = trail.user_trails.filter(userTrail => userTrail.trail_id === id)[0]?.id

      fetch(`/user_trails/${deleteId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }).then(() => {
        onDeleteSavedTrail(deleteId);
        console.log(deleteId)
      });
    }
  };

  const handleCompleteClick = () => {
    fetch(`/user_trails/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        completion: !completion,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        onCompletedTrail(data);
      });
  };

  return (
    <div className="in-line">
      <div className=" bg-orange-500 opacity-80 text-white font-sans p-6 m-6 flexitems-center rounded-lg hover:opacity-100">
        <div>
          <h3 className="font-sans text-2xl font-bold">{name}</h3>
          <h5>Difficulty: {difficulty}</h5>
          <h5>Length: {length}</h5>
        </div>
        <br></br>
        <div className="space-x-2">
          {star ? (
            <button
              onClick={handleFavoriteClick}
              className="bg-gray-500 text-white border-2 border-black rounded-lg hover:font-bold"
            >
              ★
            </button>
          ) : (
            <button
              onClick={handleFavoriteClick}
              className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold"
            >
              ✩
            </button>
          )}
          {completion ? (
            <button
              onClick={handleCompleteClick}
              className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold"
            >
              Complete!
            </button>
          ) : (
            <button
              onClick={handleCompleteClick}
              className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold"
            >
              Mark as Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrailCard;
