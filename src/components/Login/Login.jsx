import AuthContainer from '../AuthContainer/AuthContainer';
import Input from '../Input/Input';
import './Login.css';

function Login() {
  return (
    <main className='login'>
      <AuthContainer
        title='Рады видеть!'
        submitText='Войти'
      >
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

export default Login;
