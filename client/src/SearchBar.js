function SearchBar({ searchTerm, setSearchTerm, trailsToDisplay }) {

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
        console.log(event.target.value)
    };

    return (
        <div>
            <input
            type="text"
            placeholder="Search for a trail..."
            value={searchTerm}
            onChange={handleSearchChange}
            />
        </div>
    )
}

export default SearchBar;