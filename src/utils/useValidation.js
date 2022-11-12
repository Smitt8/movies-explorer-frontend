import React from 'react';
import { REGEX_NAME } from './consts';
import { isEmail } from 'validator'

export default function useValidation(user) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      const {name, email} = user;
      setValues({ name, email })
    }
  }, [user]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: createMessage(target) });
    setIsValid(getValidity(target));
  };

  const getValidity = (target) => {
    const { name, value } = target;
    const email = (name === 'email') ? value : values['email'];
    const validity = target.closest('form').checkValidity();
    if (!validity) {
      return validity;
    }
    if (email) {
      return (isEmail(email) && validity);
    }
    
    return validity;
  }; 

  const createMessage = ({ name, value, validationMessage }) => {

    if (name === 'email' && !isEmail(value) && !validationMessage) {
      return 'Введите корректную электронную почту'
    }

    if (validationMessage) {
      return validationMessage;
    }
    if (name === 'name' && REGEX_NAME.test(value) !== true) {
      return 'Поле должно содержать латиницу, кириллицу, пробел или дефис';
    }

    return '';
  }

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
