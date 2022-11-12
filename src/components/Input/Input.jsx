import Error from '../Error/Error';
import './Input.css';

function Input({ name, type, heading, errText, minLength, maxLength, onChange, value, disabled }) {
  const style = errText ? 'input__field_error' : '';
  return (
    <label className='input'>
      <span className='input__heading'>{heading}</span>
      <input
        type={type}
        name={name}
        className={`input__field ${style}`}
        minLength={minLength || 'none'}
        maxLength={maxLength || 'none'}
        onChange={onChange}
        value={value}
        required
        disabled={disabled || false}
      />
      <Error isActive={errText} text={errText} />
    </label>
  );
}

export default Input;
