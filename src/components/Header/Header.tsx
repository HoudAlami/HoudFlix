import { Link } from 'react-router-dom';
import './Header.scss';
function Header() {
  return (
    <div className="header">
      <Link to={'/home'}>
        <img
          src="/assets/Houdflix.png"
          alt="header-logo"
          className="header__logo"
        />
      </Link>

      <Link to={'/about'} className="home__header-about">
        <p>A propos</p>
      </Link>
    </div>
  );
}

export default Header;
