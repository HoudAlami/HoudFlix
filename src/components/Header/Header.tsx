import { Link } from 'react-router-dom';
import './Header.scss';
function Header() {
  return (
    <div className="header">
      <Link to={'/home'}>
        <img
          src="http://localhost:5173/public/assets/Houdflix.png"
          alt="header-logo"
          className="header__logo"
        />
      </Link>

      <Link to={'/about'} className="home__header-about">
        <p>About</p>
      </Link>
    </div>
  );
}

export default Header;
