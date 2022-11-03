import "./FilterCheckbox.css";

function FilterCheckbox({ isShortcuts, onChecked }) {
  return (
    <label className='filter'>
      <input
        type='checkbox'
        className='filter__checkbox'
        id='shortcuts'
        onChange={onChecked}
        checked={isShortcuts}
      />
      <span className='filter__text'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
