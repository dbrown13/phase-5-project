function TrailCard({
  user,
  trail,
  fetchTrails,
}) {

  const {
    id,
    name,
    difficulty,
    length,
    user_trails = [],
  } = trail

  const isStarred = user_trails.find((user_trail) => user_trail.user_id === user?.id)
  const isCompleted = user_trails.find((user_trail) => user_trail.user_id === user?.id && user_trail.completion)

  const handleFavoriteClick = () => {

    if (!isStarred) {
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
    } else {
      fetch(`/user_trails/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
    }

    fetchTrails();
  };

  const handleCompleteClick = () => {
    fetch(`/user_trails/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        completion: !isCompleted,
      }),
    })
    fetchTrails();
  };

  const renderCompletedButton = () => {
    if (isStarred) {
      if (isCompleted) {
        return (
          <button
            onClick={handleCompleteClick}
            className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold"
          >
            Complete!
          </button>
        )
      } else {
        return (
          <button
            onClick={handleCompleteClick}
            className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold"
          >
            Mark as Completed
          </button>
        )
      }
    }
  }

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
          {isStarred ? (
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
          {renderCompletedButton()}
        </div>
      </div>
    </div>
  );
}

export default TrailCard;
