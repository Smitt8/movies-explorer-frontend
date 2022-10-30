import './FilterCheckbox.css'

function FilterCheckbox() {
  return ( 
    <label className='filter'>
      <input type='checkbox' className='filter__checkbox' id='shortcuts'/>
      <span className='filter__text'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;