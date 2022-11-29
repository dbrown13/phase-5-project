function TrailCard({ id, trails, name, length, difficulty, onFavoriteTrail, favorite }) {
    const handleFavoriteClick = () => {
        fetch(`/trails/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                favorite: !favorite
            }),
        })
        .then((r) => r.json())
        .then(data => {
            onFavoriteTrail(data)
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
        {favorite ? (
          <button onClick={handleFavoriteClick} className="bg-gray-500 text-white border-2 border-black rounded-lg hover:font-bold">
          ★</button>

        ) : (
            <button onClick={handleFavoriteClick} className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold">
            ✩</button>
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
