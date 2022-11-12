import React from 'react';
import './Error.css'

function Error({ className, text }) {
  const cl = (className) || ''; 
  const [errText, setErrText] = React.useState('');
  const [errStyle, setErrStyle] = React.useState('');

  React.useEffect(() => {
    setErrText(text);
    setErrStyle((text) ? 'error_active' : '');
  }, [text])
  return (
    <span className={`error ${errStyle} ${cl}`}>{errText}</span>
  );
};

export default Error;