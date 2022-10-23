import Error from '../Error/Error';
import './Input.css'

function Input({ name, type, heading, errText }) {
  return (
    <label className='input'>
      <span className='input__heading'>{heading}</span>
      <input type={type} name={name} className='input__field' required />
    <Error isActive={true} text={errText} />
  </label>
  );
};

export default Input;