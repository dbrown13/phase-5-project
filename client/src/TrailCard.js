function TrailCard() {
  return (
    <div className="in-line">
    <div className="bg-orange-500 opacity-80 text-gray-100 font-sans p-6 m-6 flexitems-center rounded-lg hover:shadow-2xl">
      <h3 className="font-sans text-2xl font-bold">trail name</h3>
      <h5>trail difficulty</h5>
      <h5>trail length</h5>
      <br></br>
      <div className="">
        <button className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold">
          Save
        </button>
        <button className="bg-gray-500 text-white border-2 border-black rounded-lg p-0.2 hover:font-bold">
          Mark as Completed
        </button>
      </div>
    </div>
    </div>
  );
}

export default TrailCard;
