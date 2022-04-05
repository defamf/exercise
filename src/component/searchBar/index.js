import "./index.css";

const SearchBar = (props) => {
  return (
    <>
      <h1>Gif Search</h1>
      <form onSubmit={props.searchInput}>
        <input
          className="input-area"
          type="text"
          placeholder="Search"
          value={props.query}
          onChange={props.getInput}
        ></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export { SearchBar };
