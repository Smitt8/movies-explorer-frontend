import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css'

function SearchForm() {
  return (
    <section className='search-form'>
        <form className='search-form__form'>
          <label className='search-form__label'>
            <input className='search-form__search' type='text' placeholder='Фильм'/>
            <button className='search-form__button'>Найти</button>
          </label>
          <FilterCheckbox />
        </form>
    </section>
  );
};

export default SearchForm;