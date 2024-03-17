import { Link } from 'react-router-dom';
import './FooterLink.scss';
function FooterLink() {
  return (
    <div className="footerLink">
      <ul className="footerLink__list">
        <a
          className="links"
          href="https://www.linkedin.com/in/houd-alami-683053213/"
        >
          <li className="footerLink__list-item">Linkedin</li>
        </a>
        <a className="links" href="https://github.com/HoudAlami">
          <li className="footerLink__list-item">GitHub</li>
        </a>
      </ul>
      <Link to={'/'} className="links">
        <h3 className="footerLink__logout">Logout</h3>
      </Link>
    </div>
  );
}

export default FooterLink;
