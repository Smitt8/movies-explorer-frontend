import './Register.css';
import AuthContainer from '../AuthContainer/AuthContainer';
import Input from '../Input/Input';
import useValidation from '../../utils/useValidation';
import React from 'react';

function Register({ onRegister, apiError, resetApiError }) {
  const { values, handleChange, errors, isValid ,resetForm } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  }
  
  React.useEffect(() => {
    resetApiError();
  }, [values]);

  return (
    <main className='register'>
      <AuthContainer
        title='Добро пожаловать!'
        resetForm={resetForm}
        isValid={isValid}
        onSubmit={handleSubmit}
        submitText='Зарегистрироваться'
        apiError={apiError}
      >
        <Input
          name='name'
          type='text'
          heading='Имя'
          minLength={2}
          maxLength={30}
          value={values['name']}
          onChange={handleChange}
          errText={errors['name']}
        />
        <Input
          name='email'
          type='email'
          heading='E-mail'
          value={values['email']}
          onChange={handleChange}
          errText={errors['email']}
        />
        <Input
          name='password'
          type='password'
          heading='Пароль'
          value={values['password']}
          onChange={handleChange}
          errText={errors['password']}
        />
      </AuthContainer>
    </main>
  );
}

export default Register;
