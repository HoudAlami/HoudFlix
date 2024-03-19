import { Link } from 'react-router-dom';
import './Footer.scss';
function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <h2 className="footer__content-title">
          Le téléchargement est strictement interdit. Des poursuites peuvent
          être engagées en cas de télécargement illégal.
        </h2>
        <div className="footer__content-download">
          <h3 className="footer__content-download-title">
            Click the button to download the <span className="CV">CV</span>
          </h3>
          <a href="/assets/CV/CvHoudAlami.pdf" download="HoudCv.pdf">
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
