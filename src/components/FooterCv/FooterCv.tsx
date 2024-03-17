import { Link } from 'react-router-dom';
import './Footer.scss';
function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <h2 className="footer__content-title">
          Downloading is strictly prohibited. Prosecutions may be liable in the
          event of illegal downloading
        </h2>
        <div className="footer__content-download">
          <h3 className="footer__content-download-title">
            Click the button to download the <span className="CV">CV</span>
          </h3>
          <a href="/assets/CV/Houd Alami Marrouni CV.pdf" download="HoudCv.pdf">
            <button className="footer__content-download-button">
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
