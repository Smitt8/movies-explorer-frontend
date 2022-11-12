import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ isSaved, isShortcuts, onSubmit, onChecked, isLoading }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchErr, setSearchErr] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === '') {
      setSearchErr('Нужно ввести ключевое слово');
    } else {
      onSubmit(searchQuery);
      (!isSaved) && localStorage.setItem('query', searchQuery);
    }
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  React.useEffect(() => {
    if (!isSaved) {
      const cached = localStorage.getItem('query');
      if (cached) {
        setSearchQuery(cached);
      }
    }
  }, [isSaved]);

  React.useEffect(() => {
    setSearchErr('');
  }, [searchQuery]);

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
            disabled={isLoading}
          />
          <button type='submit' className='search-form__button' disabled={isLoading}>
            Найти
          </button>
          <p className='search-form__error'>{searchErr}</p>
        </label>
        <FilterCheckbox isShortcuts={isShortcuts} onChecked={onChecked} />
      </form>
    </section>
  );
}

export default SearchForm;
