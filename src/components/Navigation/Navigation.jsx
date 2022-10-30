import Menu from '../Menu/Menu';
import MenuAuth from '../MenuAuth/MenuAuth';
import './Navigation.css';

function Navigation({ loggedIn }) {
  return (
    <nav className='navigation'>
      {
        loggedIn ?
        <Menu /> :
        <MenuAuth /> 
      }
    </nav>
  );
}

export default Navigation;
