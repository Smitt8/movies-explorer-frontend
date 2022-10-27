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
        />
        <Input
          name='email'
          type='email'
          heading='E-mail'
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
