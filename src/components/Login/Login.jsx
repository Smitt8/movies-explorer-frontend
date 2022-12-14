import React from 'react';
import useValidation from '../../utils/useValidation';
import AuthContainer from '../AuthContainer/AuthContainer';
import Input from '../Input/Input';
import './Login.css';

function Login({ onLogin, apiError, resetApiError, isLoading }) {
  const { values, handleChange, errors, isValid } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  React.useEffect(() => {
    resetApiError();
  }, [values]);
  
  return (
    <main className='login'>
      <AuthContainer
        title='Рады видеть!'
        onSubmit={handleSubmit}
        submitText='Войти'
        isValid={isValid}
        apiError={apiError}
        disabled={isLoading}
      >
        <Input
          name='email'
          type='email'
          heading='E-mail'
          value={values['email'] || ''}
          onChange={handleChange}
          errText={errors['email']}
          disabled={isLoading}
        />
        <Input
          name='password'
          type='password'
          heading='Пароль'
          value={values['password'] || ''}
          onChange={handleChange}
          errText={errors['password']}
          disabled={isLoading}
        />
      </AuthContainer>
    </main>
  );
}

export default Login;
