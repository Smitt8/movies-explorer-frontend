import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ isSaved, isShortcuts, onSubmit, onChecked }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const key = isSaved ? "saved" : "movies";
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem(`query-${key}`, searchQuery);
    onSubmit(searchQuery);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  React.useEffect(() => {
    const cached = sessionStorage.getItem(`query-${key}`);
    if (cached) {
      setSearchQuery(cached);
    }
  }, [key]);

  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <label className='search-form__label'>
          <input
            className='search-form__search'
            type='text'
            placeholder='Фильм'
            onChange={handleInput}
            value={searchQuery}
            required
          />
          <button type='submit' className='search-form__button'>
            Найти
          </button>
        </label>
        <FilterCheckbox isShortcuts={isShortcuts} onChecked={onChecked} />
      </form>
    </section>
  );
}

export default SearchForm;
