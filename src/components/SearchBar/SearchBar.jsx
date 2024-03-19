import "./SearchBar.css";

export const SearchBar = ({ setSearchResult, searchResult }) => {
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <input
        className="search__input"
        type="text"
        name="search"
        id="search"
        placeholder="Search Pokemon"
        value={searchResult}
        onChange={(e) => setSearchResult(e.target.value)}
      />
    </form>
  );
};
