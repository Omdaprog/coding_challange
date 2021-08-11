




function SearchForm({setSearchValue, setSearchCategorie}) {

    const handleChange = (e) => {
        setSearchValue(e.target.value);
      }

  return (
    <div>
      <form >
        <label>
          Search :
        </label>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchForm;
