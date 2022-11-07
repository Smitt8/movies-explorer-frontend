import React from 'react';
import { FETCH_ERR } from '../../utils/consts';
import './Error.css'

function Error({ className, text }) {
  const style = (text) ? 'error_active' : '';
  const cl = (className) || ''; 
  const [modText, setModText] = React.useState('');

  React.useEffect(() => {
    if (text) {
      setModText((FETCH_ERR.test(text)) ? 'Ошибка соединения с сервером' : text);
    }
  }, [text, modText])
  return (
    <span className={`error ${style} ${cl}`}>{modText}</span>
  );
};

export default Error;