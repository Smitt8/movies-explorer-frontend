const getErrMsg = (err) => {
  const { message } = err;
  if (message.match('fetch'))
    return 'Сервер недоступен';
  if (message.match('Validation'))
    return 'Неправильные входные значения';
  
    return message;
}

export {
  getErrMsg,
}
