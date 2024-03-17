import { Link } from 'react-router-dom';
import './ProfilPage.scss';
function ProfilPage() {
  return (
    <div className="profilPage">
      <div className="profilPage__header">
        <img src="public/assets/Houdflix.png" alt="Houdflix" />
      </div>
      <div className="profilPage__area">
        <h2 className="profilPage__area-title">Choose your profile</h2>
        <div className="profilPage__area-items">
          <Link to={'home'} className="links">
            <div className="profilPage__area-item">
              <img src="/assets/Houd.jpg" alt="Houd" className="item__image" />
              <h3>Houd</h3>
            </div>
          </Link>
          <Link to={'home'} className="links">
            <div className="profilPage__area-item">
              <img
                src="/assets/recruteurs.jpg"
                alt="recruteur"
                className="item__image"
              />
              <h3>Recruiters</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilPage;
