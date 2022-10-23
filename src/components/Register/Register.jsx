import './Register.css';
import AuthContainer from '../AuthContainer/AuthContainer';
import Input from '../Input/Input';

function Register() {
  return (
    <main className='register'>
      <AuthContainer
        title='Добро пожаловать!'
        submitText='Зарегистрироваться'
      >
        <Input
          name='name'
          type='text'
          heading='Имя'
          errText='Что-то пошло не так...'
        />
        <Input
          name='email'
          type='email'
          heading='E-mail'
          errText='Что-то пошло не так...'
        />
        <Input
          name='password'
          type='password'
          heading='Пароль'
          errText='Что-то пошло не так...'
        />
      </AuthContainer>
    </main>
  );
}

export default Register;
