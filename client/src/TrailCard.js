function TrailCard({ trails, name, length, difficulty, onFavoriteTrail }) {
    const handleFavoriteClick = () => {
        fetch(`/locations/${trails.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ user_id: 1}),
        })
        .then((r) => r.json())
        .then(data => {
            onFavoriteTrail(data)
        });
    };

  return (
    <div className="in-line">
      <div className="bg-orange-500 opacity-80 text-white font-sans p-6 m-6 flexitems-center rounded-lg hover:opacity-100">
        <h3 className="font-sans text-2xl font-bold">{name}</h3>
        <h5>Difficulty: {difficulty}</h5>
        <h5>Length: {length}</h5>
        <br></br>
        <div className="">
        {trails?.favorite ? (
          <button onClick={handleFavoriteClick} className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold">
          ✩</button>

        ) : (
            <button onClick={handleFavoriteClick} className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold">
                ★</button>
        )
        }
          <button className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold">
            Mark as Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrailCard;
