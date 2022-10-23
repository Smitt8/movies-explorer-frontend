import './Error.css'

function Error({ isActive, text }) {
  const style = (isActive) ? 'error_active' : '';
  return (
    <span className={`error ${style}`}>{text}</span>
  );
};

export default Error;