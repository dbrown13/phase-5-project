function SearchBar({ searchTerm, setSearchTerm, trailsToDisplay }) {
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div >
      <div className="flex items-center justify-center">
        <input
        className="flex font-sans p-1 rounded-md object-center max-w-xs m-auto border-4 border-gray-500"
          type="text"
          placeholder="Search for a trail..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
